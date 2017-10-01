import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Explorer from './Explorer'
import PlayList from '../lists/PlayList'
import * as Actions from '../actions'

// ROOT_API in dev environment : localhost:5000 (see server/server.js file)
// ROOT_API in prod is the current url
const ROOT_API = window.location.host === 'localhost:3000' ? 'http://localhost:5000/' : '/';

const App = ({playlist, actions}) => (
	<table className='App'><tbody>
		<tr><td>
			<Explorer
				path='music'
				actions={actions}
				api={ROOT_API}
			/>
		</td><td>
			<PlayList
				playlist={playlist}
				actions={actions}
				api={ROOT_API}
			/>
		</td></tr>
	</tbody></table>
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