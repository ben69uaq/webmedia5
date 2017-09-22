export const addToPlaylist = (path) => ({ type: 'ADD_TO_PLAYLIST', path })
export const deleteFromPlaylist = (id) => ({ type: 'DELETE_FROM_PLAYLIST', id })
export const clickPLay = (id) => ({ type: 'CLICK_PLAY', id })