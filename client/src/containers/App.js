import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Explorer from '../components/Explorer'
import PlayList from '../components/PlayList'
import * as Actions from '../actions'

const App = ({playlist, actions}) => (
	<div className='App'>
		<Explorer actions={actions} path='music' />
		<PlayList actions={actions} playlist={playlist} />
	</div>
)

const mapStateToProps = state => ({
	playlist: state.playlist
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)