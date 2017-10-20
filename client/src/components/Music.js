import React, { Component } from 'react'
import './Music.css'

export default class Music extends Component {  	
	render() {
		var splittedName = this.props.path.split('/').pop().split('.')[0].split('-');
	
		return (
			<div
				className='Music item'
				onClick={this.handleAddToPlaylist}
			>
				<div className='right'>
					<div className='button small red button_add'></div>
				</div>
				<div className='center'>
					<div className='info'>
						<span className='artist'>{splittedName[0]}</span>
					</div>
					<div className='info'>
						{splittedName.length > 1 && <span className='title'>{splittedName[1]}</span>}
					</div>
				</div>
			</div>
		);
	}
	
	handleAddToPlaylist = () => {
		this.props.actions.addToPlaylist(this.props.path)
	}
}