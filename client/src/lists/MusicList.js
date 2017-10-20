import React, { Component } from 'react'
import Music from '../components/Music'

export default class MusicList extends Component {	
	render() {
		return (
			<div className='MusicList col'>
				<div className='header'>
					<div className='button horizontal big white button_add_all'
						onClick={this.handleAddAll}
					></div>
				</div>
				<div className='body'>
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
	
	handleAddAll = () => {
		this.props.musicList.forEach((music) =>
			this.props.actions.addToPlaylist(music)
		)
	}
}