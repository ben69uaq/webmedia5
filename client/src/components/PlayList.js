import React, { Component } from 'react'
import Player from './Player'

export default class PlayList extends Component {	
	render() {
		return (
			<div className='PlayList'>
				<div className='container'>
					{(this.props.playlist).map((play) =>
						<Player
							key={play.id}
							play={play}
							actions={this.props.actions}
						/>
					)}
				</div>
			</div>
		);
	}
}