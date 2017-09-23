import React, { Component } from 'react'
import FolderList from './FolderList'
import MusicList from './MusicList'

export default class Explorer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			path: null,
			folderList: [],
			musicList: []
		};
		
		this.handlePathChange(props.path); //  Initialise explorer with path property
	}
	
	render() {
		return (
			<div className='Explorer'>
				<FolderList
					path={this.state.path} // Send path to folderList to determine active folder
					folderList={this.state.folderList}
					onPathChange={this.handlePathChange.bind(this)}
				/>
				<MusicList
					musicList={this.state.musicList}
					actions={this.props.actions}
				/>
			</div>
		)
	}
	
	handlePathChange(newPath) {
		if (newPath !== this.state.path){
			
			console.log(this.props.api);
			
			fetch(this.props.api + newPath)
			.then((response) => response.json())
			.then((response) => {
			
				var musicList = [];
				var childFolderList = [];
				
				if(response.length > 0) {
					(response).forEach((item) => {
						if (item.indexOf('.') > -1) {
							musicList.push(newPath + '/' + item);
						}
						else {
							childFolderList.push(newPath + '/' + item);
						}
					})
				}
				
				this.setState({ // Update path and music list
					path: newPath,
					musicList: musicList
				});
				
				if(childFolderList.length > 0) { // If only there is child folder, update folder list
					this.setState({
						folderList: [...this.getParentFolders(newPath), ...childFolderList]
					});
				}
			});
		}
	}
	
	getParentFolders(path) { // Return an array with path of parent folder(s)
		var parentFolders = [];
		var pathSplitted = path.split('/');
		
		if(pathSplitted.length > 0) {
			(pathSplitted).forEach((folder, index) => {
				parentFolders.push(pathSplitted.slice(0,index + 1).join('/'));
			})
		}
		
		return parentFolders;
	}
}