import React, { Component } from 'react'
import Play from '../components/Play'

export default class PlayList extends Component {	
	render() {
		window.ACTIONS = this.props.actions;
		return (
			<div className='PlayList col'>
				<div className='header'>
					<div
						className='button big light button_remove_all'
						onClick={this.handleClickRemoveAll}
					></div>
				</div>
				<div className='body'>
					<div className='container'>
						{(this.props.playlist).map((play) =>
							<Play
								key={play.id}
								play={play}
								scrollElement={this.scrollElement}
								actions={this.props.actions}
								api={this.props.api}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
	
	handleClickRemoveAll = () => {
		this.props.actions.removeAllFromPlaylist();
	}
}