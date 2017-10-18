import React, { Component } from 'react'
import Play from '../components/Play'

export default class PlayList extends Component {	
	render() {
		return (
			<div className='PlayList panel'>
				<table><tbody>
					<tr><td>
						<div className='panel_top'>
							<div className='button horizontal big white button_remove_all'
								onClick={this.handleClickRemoveAll}
							></div>
						</div>
					</td></tr>
					<tr><td>
						<div
							className='panel_bottom'
							ref={(div) => {this.scrollElement = div}}
						>
							<div className='panel_container' >
								{(this.props.playlist).map((play) =>
									<Play
										key={play.id}
										play={play}
										scrollElement={this.scrollElement}
										playCount={this.props.playlist.length}
										actions={this.props.actions}
										api={this.props.api}
									/>
								)}
							</div>
						</div>
					</td></tr>
				</tbody></table>
			</div>
		);
	}
	
	handleClickRemoveAll = () => {
		this.props.actions.removeAllFromPlaylist();
	}
}