import React, { Component } from 'react'
import Playable from './Playable'
import Player from './Player'

export default class PlayList extends Component {	
	render() {
		return (
			<div className='PlayList'>
				<div className='container'>
					{(this.props.playlist).map((play) => 
						play.player ?
							<Player
								key={play.id}
								id={play.id}
								path={play.path}
								actions={this.props.actions}
							/>
						:
							<Playable
								key={play.id}
								id={play.id}
								path={play.path}
								actions={this.props.actions}
							/>
					)}
				</div>
			</div>
		);
	}
}