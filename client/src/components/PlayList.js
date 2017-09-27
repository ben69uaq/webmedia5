import React, { Component } from 'react'
import Play from './Play'

export default class PlayList extends Component {	
	render() {
		return (
			<div className='PlayList list'>
				<div className='controller'>
					<div className='control button button_remove_all'
						onClick={this.handleAddAllToPlaylist}
					></div>
				</div>
				<div className='scroller'>
					<div className='container'>
						{(this.props.playlist).map((play) =>
							<Play
								key={play.id}
								play={play}
								actions={this.props.actions}
								api={this.props.api}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}