import React, { Component } from 'react'

export default class Player extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			status: null
		};
	}
	
	render() {
		var splittedName = this.props.play.path.split('/').pop().split('.')[0].split('-');
		return (
			<div className='Player item'>
				<audio 
					src={'http://localhost:5000/' + this.props.play.path}
					onTimeUpdate={this.handleTimeUpdate}
					autoPlay={this.props.play.status==='PLAY' ? true : false}
				>
					<source type='audio/mpeg' />
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
	
	handleClickPlay = () => {
		this.props.actions.clickPLay(this.props.play.id);
	}
	
	handleDeleteFromPlaylist = () => {
		this.props.actions.deleteFromPlaylist(this.props.play.id);
	}
	
	handleTimeUpdate = () => {
		var duration = this.audioTag.duration;    // Durée totale
		var time     = this.audioTag.currentTime; // Temps écoulé
		var fraction = time / duration;
		var percent  = fraction * 100;

		console.log(duration +' / '+time);
		
		this.progressBar.style.width = percent + '%';
		this.mainCursor.style.marginLeft = percent + '%';
	}
}