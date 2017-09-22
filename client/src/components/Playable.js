import React, { Component } from 'react'

export default class Playable extends Component {
	render() {
		var splittedName = this.props.play.path.split('/').pop().split('.')[0].split('-');
		
		return (
			<div className='Playable item'>
				<div className='control control_play'
					onClick={this.handlePlay}
				>&#xf01d;</div>
				<div className='control'>
					<button onClick={this.handleDeleteFromPlaylist}>R</button>
				</div>
				<div className='info'>
					<span>{splittedName[0]}</span>{splittedName.length > 1 && <span> | {splittedName[1]}</span>}
				</div>
			</div>
		);
	}
	
	handleDeleteFromPlaylist = () => {
		this.props.actions.deleteFromPlaylist(this.props.play.id);
	}
	
	handlePlay = () => {
		this.props.actions.play(this.props.play.id);
	}
}