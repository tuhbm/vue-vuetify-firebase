import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://d1aueex22ha5si.cloudfront.net/TEMP/time-square-new-york-city-istock-487537456-2-1501663358549.jpg',
        id: 'fjdsklafjldksafjlkdsafj123',
        title: 'Meetup in NewYork',
        date: '2017-07-16',
        location: 'New York',
        description: 'Come on!!! New York meetup!!!!'
      },
      {
        imageUrl: 'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/09/shutterstock_407897917-lotte-world-tower-seoul-61bbde30f1cf.jpg',
        id: 'fjdsklafjldksafjlkdsafj112345',
        title: 'Meetup in Seoul',
        date: '2017-07-18',
        location: 'Seoul',
        description: 'Come on!!! Seoul meetup!!!!'
      }
    ],
    user: {
      id: 'fjsdajfisfsdid',
      regitseredMeetups: ['fjdskajfdsafadsregister']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      // 파이어베이스에 저장
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featureMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
