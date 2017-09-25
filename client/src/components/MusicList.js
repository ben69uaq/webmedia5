import React, { Component } from 'react'
import Music from './Music'

export default class MusicList extends Component {	
	render() {
		return (
			<div className='MusicList scroller'>
				<div className='controller'>
					<button
						onClick={this.handleAddAllToPlaylist}
					>All</button>
				</div>
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
		);
	}
	
	handleAddAllToPlaylist = () => {
		this.props.musicList.forEach((music) =>
			this.props.actions.addToPlaylist(music)
		)
	}
}