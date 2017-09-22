import React, { Component } from 'react'

export default class Playable extends Component {
	render() {
		var splittedName = this.props.path.split('/').pop().split('.')[0].split('-');
		
		return (
			<div className='Play item'>
				<div className='control'>
					<button onClick={this.handleAddToPlayer1}>P1</button>
					<button onClick={this.handleDeleteFromPlaylist}>R</button>
				</div>
				<div className='info'>
					<div>{splittedName[0]}</div>
					{splittedName.length > 1 && <div>{splittedName[1]}</div>}
				</div>
			</div>
		);
	}
	
	handleDeleteFromPlaylist = () => {
		this.props.actions.deleteFromPlaylist(this.props.id);
	}
	
	handleAddToPlayer1 = () => {
		this.props.actions.addToPlayer(this.props.id, 'player1');
	}
}