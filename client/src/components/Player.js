import React, { Component } from 'react'

export default class Player extends Component {	
	render() {
		var splittedName = this.props.play.path.split('/').pop().split('.')[0].split('-');
		return (
			<div className='Player item'>
				<audio 
					src={this.props.api + this.props.play.path}
					preload='none'
					onTimeUpdate={this.handleTimeUpdate}
					onEnded={this.handleEnded}
					ref={(audio) => {this.audioElement = audio}}
				>
					<source type='audio/mp3' />
				</audio>
				<div className='left'>
					<div className={this.props.play.status==='PLAY' ? 'control control_pause' : 'control control_play'}
						onClick={this.handleClickPlay}
					></div>
				</div>
				{this.props.play.status !== 'PLAY' &&
					<div className='right'>
						<div className='control control_close'
							onClick={this.handleDeleteFromPlaylist}
						></div>
						<div className='control control_settings'
						></div>
					</div>
				}
				<div className='center'>
					<div className='info'>
						<span className='artist'>{splittedName[0]}</span>
						{splittedName.length > 1 && <span className='title'> | {splittedName[1]}</span>}
					</div>
					<div className='player_bar'>
						<div className='player_bar_container'>
							<div className='player_bar_total'>
								<div
									className='player_bar_progress'
									ref={(div) => { this.progressBar = div; }}
								></div>
							</div>
							<div
								className='player_cursor_main'
								ref={(div) => { this.mainCursor = div; }}
							></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
	componentWillReceiveProps(nextProps) {
		if(nextProps.play.status === 'PLAY' && this.audioElement.paused) {
			this.audioElement.play();
		}
		if(nextProps.play.status !== 'PLAY' && !this.audioElement.paused) {
			this.audioElement.pause();
		}
	}
	
	handleClickPlay = () => {
		this.props.actions.clickPlay(this.props.play.id);
	}
	
	handleEnded = () => {
		this.props.actions.clickPlay(this.props.play.id);
	}
	
	handleDeleteFromPlaylist = () => {
		this.props.actions.deleteFromPlaylist(this.props.play.id);
	}
	
	handleTimeUpdate = () => {
		var duration = this.audioElement.duration;    // Durée totale
		var time     = this.audioElement.currentTime; // Temps écoulé
		var percent  = time / duration * 100;
		
		this.progressBar.style.width = percent + '%';
		this.mainCursor.style.marginLeft = percent + '%';
	}
}