export const addToPlaylist = (path) => ({ type: 'ADD_TO_PLAYLIST', path })
export const removeFromPlaylist = (id) => ({ type: 'REMOVE_FROM_PLAYLIST', id })
export const removeAllFromPlaylist = () => ({ type: 'REMOVE_ALL_FROM_PLAYLIST' })
export const clickPlay = (id) => ({ type: 'CLICK_PLAY', id })