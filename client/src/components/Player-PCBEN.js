import React, { Component } from 'react'

export default class Player extends Component {
	render() {		
		return (
			<div className='Play item'>
				<audio controls autoPlay src={'http://localhost:5000/' + this.props.path}>
					<source type='audio/mpeg' />
				</audio>
				<div className='player_controls'>
					<div className='player_progress'>
						<div className='player_cursor'></div>
					</div>
				</div>
			</div>
		);
	}
}