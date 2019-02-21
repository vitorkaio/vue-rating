const rating = {
  namespaced: true,
  state: {
    qtd: 5,
    mark: 0,
  },
  getters: {
    getMark(state) {
      return state.mark;
    },
    getQtd(state) {
      return state.qtd;
    }
  },
  mutations: {
    setMarker(state, payload) {
      state.mark = payload;
    },
  },
  actions: {
    setMark(context, payload) {
      context.commit('setMarker', payload);
    }
  }
};

export default rating;