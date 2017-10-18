import React, { Component } from 'react'
import Player from './Player'
import './Play.css'

export default class Play extends Component {	
	render() {
		var splittedName = this.props.play.path.split('/').pop().split('.')[0].split('-');
		return (
			<div
				className='Play item'
				draggable='true'
				onDragStart={this.handleDragStart}
				onDragEnd={this.handleDragEnd}
				onDrag={this.handleDrag}
			>
				<div className='left'>
					<div className={'button big red ' + (this.props.play.status==='PLAY'?'button_pause':'button_play')}
						onClick={this.handleClickPlay}
					></div>
				</div>
				{this.props.play.status !== 'PLAY' &&
					<div className='right'>
						<div className='button small red button_close'
							onClick={this.handleClickRemove}
						></div>
						<div className='button small red button_settings'
							onClick={this.handleClickSettings}
						></div>
					</div>
				}
				<div className='center'>
					<div className='info'>
						<span className='artist'>{splittedName[0]}</span>
						{splittedName.length > 1 && <span className='title'> | {splittedName[1]}</span>}
					</div>
					<Player
						play={this.props.play}
						actions={this.props.actions}
						api={this.props.api}
					/>
				</div>
			</div>
		);
	}
	
	handleClickPlay = () => {
		this.props.actions.play(this.props.play.id);
	}
	
	handleClickRemove = () => {
		this.props.actions.removeFromPlaylist(this.props.play.id);
	}
	
	handleClickSettings = () => {
	}
	
	handleDragStart = (e) => {
		this.currentPosition = Math.floor(( e.clientY + this.props.scrollElement.scrollTop - 68 ) / 65);
	}
	
	handleDragEnd = () => {
		this.currentPosition = null;
	}
	
	handleDrag = (e) => {
		var lastPosition = this.props.playCount - 1;
		if(e.clientY) {
			var newPosition = Math.floor(( e.clientY + this.props.scrollElement.scrollTop - 68 ) / 65);
			newPosition = newPosition < 0 ? 0 : newPosition > lastPosition ? lastPosition : newPosition;
			
			if(newPosition !== this.currentPosition) {
				this.props.actions.sort( this.currentPosition, newPosition );
				this.currentPosition = newPosition;
			}
		}
	}
}