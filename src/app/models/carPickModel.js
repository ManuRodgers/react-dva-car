import axios from "axios";
export default {
  namespace: "carPick",
  state: {
    filters: []
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
    }
  },
  effects: {}
};
