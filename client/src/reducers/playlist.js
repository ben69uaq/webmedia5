const playlist = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_PLAYLIST':
			return [
				...state,
				{
					id: state.reduce((maxId, play) => Math.max(play.id, maxId), -1) + 1,
					path: action.path,
					status: ''
				}
			]
		case 'DELETE_FROM_PLAYLIST':
			return state.filter(play =>
				play.id !== action.id
			)
		case 'CLICK_PLAY':
			var newState = [];
			state.forEach((play, index) => {
				if(play.id === action.id && play.status !== 'PLAY') {
					play.status = 'PLAY';
				}
				else if(play.status === 'PLAY') {
					play.status = '';
				}
				newState.push(play);
			});
			return newState
		default:
			return state
	}
}

export default playlist