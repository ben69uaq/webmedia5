import React, { Component } from 'react'

export default class Player extends Component {	
	render() {
		return (
			<div className='Player'>
				<audio 
					preload='none'
					src={this.props.api + this.props.play.path}
					onTimeUpdate={this.handleTimeUpdate}
					onEnded={this.handleEnded}
					ref={(audio) => {this.audioElement = audio}}
				>
					<source type='audio/mp3' />
				</audio>
				<div className='player_bar'
					onClick={this.handleClickBar}
				>
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
	
	handleEnded = () => {
		this.props.actions.clickPlay(this.props.play.id);
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