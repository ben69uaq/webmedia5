import React, { Component } from 'react'
import Player from './Player'

export default class Play extends Component {	
	render() {
		var splittedName = this.props.play.path.split('/').pop().split('.')[0].split('-');
		return (
			<div className='Play item'>
				<div className='left'>
					<div className={this.props.play.status==='PLAY' ? 'button button_pause' : 'button button_play'}
						onClick={this.handleClickPlay}
					></div>
				</div>
				{this.props.play.status !== 'PLAY' &&
					<div className='right'>
						<div className='button button_close'
							onClick={this.handleClickDelete}
						></div>
						<div className='button button_settings'
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
		this.props.actions.clickPlay(this.props.play.id);
	}
	
	handleClickDelete = () => {
		this.props.actions.deleteFromPlaylist(this.props.play.id);
	}
	
	handleClickSettings = () => {
	}
}