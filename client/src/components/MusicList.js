import React, { Component } from 'react'
import Music from './Music'

export default class MusicList extends Component {	
	render() {
		return (
			<div className='MusicList list'>
				<div className='controller'>
					<div className='control button button_add_all'
						onClick={this.handleAddAllToPlaylist}
					></div>
				</div>
				<div className='scroller'>
					<div className='container'>
						{(this.props.musicList).map((music, index) =>
							<Music
								key={index}
								path={music}
								actions={this.props.actions}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
	
	handleAddAllToPlaylist = () => {
		this.props.musicList.forEach((music) =>
			this.props.actions.addToPlaylist(music)
		)
	}
}