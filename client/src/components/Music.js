import React, { Component } from 'react'

export default class Music extends Component {  	
	render() {
		var splittedName = this.props.path.split('/').pop().split('.')[0].split('-');
	
		return (
			<div className='Music item'>
				<div className='right'>
					<div className='button small white button_add'
						onClick={this.handleAddToPlaylist}
					></div>
				</div>
				<div className='center'>
					<div className='info'>
						<div className='artist'>{splittedName[0]}</div>
						{splittedName.length > 1 && <div className='title'>{splittedName[1]}</div>}
					</div>
				</div>
			</div>
		);
	}
	
	handleAddToPlaylist = () => {
		this.props.actions.addToPlaylist(this.props.path)
	}
}