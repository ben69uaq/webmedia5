import React, { Component } from 'react'
import './Folder.css'

export default class Folder extends Component {
	render() {
		var splittedPath = this.props.path.split('/');
		
		return (
			<div className={'Folder level' + splittedPath.length}>
				{splittedPath.length > 1 && 
					<div className='arrow'></div>
				}
				<div 
					className={'item light' + (this.props.isActive?' active':'')}
					onClick={this.handlePathChange.bind(this)}
				>
					<span>{splittedPath.pop()}</span>
				</div>
			</div>
		);
	}
	
	handlePathChange() {
		this.props.onPathChange(this.props.path);
	}
}