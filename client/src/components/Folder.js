import React, { Component } from 'react'

export default class Folder extends Component {
	render() {
		var splittedPath = this.props.path.split('/');
		
		return (
			<div 
				className={'Folder item level' + splittedPath.length + (this.props.isActive?' active':'')}
				onClick={this.handlePathChange.bind(this)}
			>
				<span>{splittedPath.pop()}</span>
			</div>
		);
	}
	
	handlePathChange() {
		this.props.onPathChange(this.props.path);
	}
}