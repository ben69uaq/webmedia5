import React, { Component } from 'react'
import Folder from './Folder'

export default class FolderList extends Component {	
	render() {
		return (
			<div className='FolderList panel'>
				<table><tbody>
					<tr><td>
						<div className='panel_top'>
							<div className='logo'>
								WEBMEDIA5
							</div>
						</div>
					</td></tr>
					<tr><td>
						<div className='panel_bottom'>
							<div className='panel_container'>
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
					</td></tr>
				</tbody></table>
			</div>
		);
	}
}