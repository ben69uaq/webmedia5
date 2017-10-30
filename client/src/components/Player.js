import React, { Component } from 'react'
import './Player.css'

export default class Player extends Component {
	render() {
		console.log('render PLAYER');
		return (
			<div className='Player'>
				<audio 
					preload='none'
					src={this.props.api + this.props.play.path}
					onTimeUpdate={this.handleTimeUpdate}
					onEnded={this.handleEnded}
					onPlay={this.handlePlay}
					onPause={this.handlePause}
					ref={(audio) => {this.audioElement = audio}}
				>
					<source type='audio/mp3' />
				</audio>
				<div 
					className='player_bar'
					onClick={this.handleClickBar}
				>
					<div className='player_bar_container'>
						<div className='player_bar_total'>
							<div
								className='player_bar_progress dark'
								ref={(div) => { this.progressBar = div; }}
							></div>
						</div>
						<div
							className='player_cursor_main dark'
							ref={(div) => { this.mainCursor = div; }}
						></div>
					</div>
				</div>
			</div>
		);
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.play.status === 'PLAY') {
			this.audioElement.play();
		}
		if(nextProps.play.status !== 'PLAY' && !this.audioElement.paused) {
			console.log('-- PAUSE : ' + this.props.play.path);
		}
		return false;
	}
	
	handlePlay = () => {
		console.log("   ++ PLAY");
	}
	
	handlePause = () => {
		console.log("   ++ PAUSE");
	}
	
	handleEnded = () => {
		this.props.actions.next();
	}
	
	handleTimeUpdate = () => {
		var percent  = this.audioElement.currentTime / this.audioElement.duration * 100;
		this.progressBar.style.width = percent + '%'; // Move progress bar
		this.mainCursor.style.marginLeft = percent + '%'; // Move cursor
	}
	
	handleClickBar = (e) => {
		if(this.audioElement.readyState) {
			var width = this.progressBar.parentElement.offsetWidth; // Bar width
			var delta = e.pageX - this.getLeftPosition(this.progressBar); // Click position on the bar
			
			delta = delta < 0 ? 0 : delta > width ? width : delta; // Delta has to be > 0 and < width
			this.audioElement.currentTime  = this.audioElement.duration * delta / width;
		}
	}
	
	getLeftPosition = (element) => {
		var leftPosition = 0;
		while (element){
			leftPosition += element.offsetLeft;
			element = element.offsetParent;
		}
		return leftPosition;
	}
}