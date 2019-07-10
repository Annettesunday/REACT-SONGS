// Action creator

// named export - exporting a lot of function in  a single file
export const selectSong = song => {
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
