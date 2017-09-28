import React, { Component } from 'react'
import Play from './Play'

export default class PlayList extends Component {	
	render() {
		return (
			<div className='PlayList panel'>
				<table>
					<tr><td>
						<div className='panel_top'>
							<div className='control button button_remove_all'
								onClick={this.handleAddAllToPlaylist}
							></div>
						</div>
					</td></tr>
					<tr><td>
						<div className='panel_bottom'>
							<div className='panel_container'>
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
					</td></tr>
				</table>
			</div>
		);
	}
}