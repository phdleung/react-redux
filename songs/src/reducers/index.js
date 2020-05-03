import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Kings & Queens', duration: '5:08' },
    { title: 'Lady', duration: '4:34' },
    { title: 'Toosie Slide', duration: '4:07' },
    { title: 'Borderline', duration: '3:57' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
