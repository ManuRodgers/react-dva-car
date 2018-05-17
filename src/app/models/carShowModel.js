import axios from "axios";

export default {
  namespace: "carShow",
  state: {
    images: {},
    position: {
      album: "view",
      color: "blue",
      index: 0
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
    }
  },
  effects: {
    *init_async({ payload }, { put, call }) {
      const { data, status } = yield axios.get("/api");

      yield put({ type: "init", payload: { results: data.results } });
    }
  }
};
