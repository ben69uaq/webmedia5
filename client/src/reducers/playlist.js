const playlist = (state = [], action) => {
	let newState = [];
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
		case 'REMOVE_FROM_PLAYLIST':
			return state.filter(play =>
				play.id !== action.id
			)
		case 'REMOVE_ALL_FROM_PLAYLIST':
			return state.filter(play =>
				play.status === 'PLAY'
			)
		case 'SORT':
			newState = state.slice();
			newState.splice(action.newIndex, 0, newState.splice(action.oldIndex, 1)[0]);
			return newState;
		case 'PLAY':
			state.forEach((play) => {
				if(play.id === action.id && play.status !== 'PLAY') {
					play.status = 'PLAY';
				}
				else if(play.status === 'PLAY') {
					play.status = '';
				}
				newState.push(play);
			});
			return newState
		case 'NEXT':
			let next = false;
			state.forEach((play, index) => {
				if(next) {
					play.status = 'PLAY';
					next = false;
				}
				else if(play.status === 'PLAY') {
					play.status = '';
					next = true;
				}
				newState.push(play);
			});
			return newState
		default:
			return state
	}
}

export default playlist