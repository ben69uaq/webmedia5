import React, { Component } from 'react'
import Music from './Music'

export default class MusicList extends Component {	
	render() {
		return (
			<div className='MusicList panel'>
				<table>
					<tr><td>
						<div className='panel_top'>
							<div className='control button button_add_all'
								onClick={this.handleAddAllToPlaylist}
							></div>
						</div>
					</td></tr>
					<tr><td>
						<div className='panel_bottom'>
							<div className='panel_container'>
								{(this.props.musicList).map((music, index) =>
									<Music
										key={index}
										path={music}
										actions={this.props.actions}
									/>
								)}
							</div>
						</div>
					</td></tr>
				</table>
			</div>
		);
	}
	
	handleAddAllToPlaylist = () => {
		this.props.musicList.forEach((music) =>
			this.props.actions.addToPlaylist(music)
		)
	}
}