import React, { Component } from 'react'
import Folder from './Folder'

export default class FolderList extends Component {	
	render() {
		return (
			<div className='FolderList'>
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
		);
	}
}