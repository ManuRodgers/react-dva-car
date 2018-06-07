import axios from "axios";
export default {
  namespace: "carPick",
  state: {
    filters: [],
    results: []
  },
  reducers: {
    removeTag(state, action) {
      return {
        ...state,
        filters: state.filters.filter(item => item.keyValue !== action.keyValue)
      };
    },
    addOrUpdateTag(state, { keyValue, value, words }) {
      let isExisted = false;
      state.filters.forEach((item, index) => {
        if (item.keyValue === keyValue) {
          isExisted = true;
        }
      });
      // update
      if (isExisted) {
        return {
          ...state,
          filters: state.filters.map((item, index) => {
            if (item.keyValue === keyValue) {
              return {
                keyValue,
                value,
                words
              };
            }
            return item;
          })
        };
      }

      // add
      return {
        ...state,
        filters: [...state.filters, { keyValue, value, words }]
      };
    },
    getFilteredCarsSync(state, action) {
      return { ...state, results: action.results };
    }
  },
  effects: {
    *getFilteredCars(action, { select, call, put }) {
      const carPick = yield select(state => state.carPick);
      const { filters } = carPick;
      const { data, status } = yield axios.post("/cars/carList/", { filters });
      if (status === 200 && data.code === 0) {
        yield put({ type: "getFilteredCarsSync", results: data.data });
      } else {
        yield console.log(`server error`);
      }
    }
  }
};
