import React, { PureComponent } from 'react'
import Player from './Player'
import './Play.css'

export default class Play extends PureComponent {
	render() {
		console.log('render PLAY: '+this.props.play.path);
		var splittedName = this.props.play.path.split('/').pop().split('.')[0].split('-');
		return (
			<div
				className='Play item light'
				draggable='true'
				onDragStart={this.handleDragStart}
				onDragEnd={this.handleDragEnd}
				onDragEnter={this.handleDragEnter}
				ref={(div) => {this.playElement = div}}
			>
				<div className='left'>
					<div 
						className={'button dark big ' + (this.props.play.status==='PLAY'?'button_pause':'button_play')}
						onClick={this.handleClickPlay}
					></div>
				</div>
				{this.props.play.status !== 'PLAY' &&
					<div className='right'>
						<div className='button dark button_close'
							onClick={this.handleClickRemove}
						></div>
						<div className='button dark button_settings'
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
		window.draggedPlay = this.props.play;
		console.log("DRAGSTART EVENT: "+this.props.play.id);	
		this.playElement.classList.add('active');
		e.dataTransfer.setData('text',''); // For IE and FF compatibility
	}
	
	handleDragEnd = () => {
		delete window.draggedPlay;
		this.playElement.classList.remove('active');
	}
	
	handleDragEnter = () => {
		if (window.draggedPlay.id !== this.props.play.id) {
			console.log("DRAGENTER EVENT: "+window.draggedPlay.id+" | "+this.props.play.id);
			this.props.actions.sort( window.draggedPlay, this.props.play );
		}
	}
}