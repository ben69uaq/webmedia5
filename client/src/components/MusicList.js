import React, { Component } from 'react'
import Music from './Music'

export default class MusicList extends Component {	
	render() {
		return (
			<div className='MusicList panel'>
				<table><tbody>
					<tr><td>
						<div className='panel_top'>
							<div className='button horizontal big white button_add_all'
								onClick={this.handleAddAll}
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
				</tbody></table>
			</div>
		);
	}
	
	handleAddAll = () => {
		this.props.musicList.forEach((music) =>
			this.props.actions.addToPlaylist(music)
		)
	}
}