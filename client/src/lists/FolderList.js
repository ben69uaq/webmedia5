import React, { Component } from 'react'
import Folder from '../components/Folder'

export default class FolderList extends Component {	
	render() {
		return (
			<div className='FolderList col'>
				<div className='header'>
					<div className='logo'>
						WEBMEDIA5
					</div>
				</div>
				<div className='body'>
					<div className='container'>
						{(this.props.folderList).map((folder, index) =>
							<Folder
								key={index}
								path={folder}
								onPathChange={this.props.onPathChange}
								isActive={folder===this.props.path?true:false}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}