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
			
		case 'REMOVE_FROM_PLAYLIST':
			return state.filter(play =>
				play.id !== action.id
			)
			
		case 'REMOVE_ALL_FROM_PLAYLIST':
			return state.filter(play =>
				play.status === 'PLAY'
			)
			
		case 'SORT':
			console.log("SORT: "+action.draggedPlay.id+" | "+action.targetPlay.id);
			return state.map((play) => {
				if (play.id === action.draggedPlay.id) {
					return action.targetPlay;
				}
				if (play.id === action.targetPlay.id) {
					return action.draggedPlay;
				}
				return play;
			})
			
		case 'PLAY':
			return state.map((play) => {
				if(play.id === action.id && play.status !== 'PLAY') {
					return {
						...play, status : 'PLAY'
					}
				}
				if(play.status === 'PLAY') {
					return {
						...play, status : ''
					}
				}
				return play
			})
		
		case 'NEXT':
			let next = false;
			return state.map((play) => {
				if(next) {
					next = false;
					return {
						...play, status : 'PLAY'
					}
				}
				if(play.status === 'PLAY') {
					next = true;
					return {
						...play, status : ''
					}
				}
				return play
			})
		default:
			return state
	}
}

export default playlist