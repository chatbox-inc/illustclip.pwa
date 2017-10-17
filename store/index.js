import axios from 'axios'

export const state = () => ({
  illust: null
})

export const getters = {
  illustByName: (state, getters) => (name) => state.illust[name]
}

export const mutations = {
  SET_Illust (state, illust) {
    state.illust = illust
    return illust
  }
}

export const actions = {
  async fetchIllust (state) {
    if (!state.illust) {
      const {data} = await axios.get(`https://www.illust-clip.design/api.json`)
      return state.commit('SET_Illust', data)
    } else {
      return true
    }
  }
}
