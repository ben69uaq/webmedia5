import React, { Component } from 'react'
import Play from './Play'

export default class PlayList extends Component {	
	render() {
		return (
			<div className='PlayList scroller'>
				<div className='container'>
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
		);
	}
}