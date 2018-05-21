import axios from "axios";

export default {
  namespace: "carShow",
  state: {
    images: {},
    position: {
      album: "view",
      color: "blue",
      idx: 0
    }
  },
  reducers: {
    init: (state, action) => {
      return {
        ...state,
        images: action.payload.results
      };
    },
    changeColor: (state, action) => {
      return {
        ...state,
        position: { ...state.position, color: action.payload.color }
      };
    },
    changeAlbum: (state, action) => {
      return {
        ...state,
        position: { ...state.position, album: action.payload.album }
      };
    },
    changeIdx: (state, action) => {
      return {
        ...state,
        position: { ...state.position, idx: action.payload.index }
      };
    },
    goNext: (state, action) => {
      let currentAlbum = state.position.album;
      let currentIdx = state.position.idx;
      let currentColor = state.position.color;
      let colorArr = Object.keys(state.images);
      let albums = state.images[currentColor]; // albums is an object
      let albumArr = ["view", "center", "detail"].filter(item =>
        albums.hasOwnProperty(item)
      );
      let albumIndex = albumArr.indexOf(currentAlbum);
      let colorIndex = colorArr.indexOf(currentColor);
      let colorLength = colorArr.length;
      // console.log(currentAlbum);
      // console.log(currentColor);
      // console.log(currentIdx);
      // console.log(albumIndex);
      // console.log(colorIndex);
      // console.log(colorLength);
      if (currentIdx < albums[currentAlbum].length - 1) {
        return {
          ...state,
          position: { ...state.position, idx: currentIdx + 1 }
        };
      } else if (albumIndex < albumArr.length - 1) {
        return {
          ...state,
          position: {
            ...state.position,
            album: albumArr[albumIndex + 1],
            idx: 0
          }
        };
      } else if (colorIndex < colorLength - 1) {
        return {
          ...state,
          position: {
            ...state.position,
            color: colorArr[colorIndex + 1],
            album: "view",
            idx: 0
          }
        };
      } else {
        alert(`this is the end of car images`);
      }
      return state;
    },
    goPrevious(state, action) {
      // known:

      const currentAlbum = state.position.album;
      const currentColor = state.position.color;
      const currentIdx = state.position.idx;
      const albums = state.images[currentColor];

      const albumArr = ["view", "center", "detail"].filter(item =>
        albums.hasOwnProperty(item)
      );
      const albumIndex = albumArr.indexOf(currentAlbum);
      const colorArr = Object.keys(state.images);
      const colorIndex = colorArr.indexOf(currentColor);

      // console.log(currentAlbum);
      // console.log(currentColor);
      console.log(currentIdx);
      console.log(albumIndex);
      console.log(colorIndex);
      if (currentIdx > 0) {
        return {
          ...state,
          position: { ...state.position, idx: currentIdx - 1 }
        };
      } else if (albumIndex > 0) {
        console.log(`album`);

        return {
          ...state,
          position: {
            ...state.position,
            album: albumArr[albumIndex - 1],
            idx: albums[albumArr[albumIndex - 1]].length - 1
          }
        };
      } else if (colorIndex > 0) {
        return {
          ...state,
          position: {
            ...state.position,
            color: colorArr[colorIndex - 1],
            album: "detail",
            idx: state.images[colorArr[colorIndex - 1]]["detail"].length - 1
          }
        };
      } else {
        alert(`this is the first image`);
      }

      return state;
    }
  },
  effects: {
    *init_async({ payload }, { put, call }) {
      const { data, status } = yield axios.get("/api");

      yield put({ type: "init", payload: { results: data.results } });
    }
  }
};
