import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://d1aueex22ha5si.cloudfront.net/TEMP/time-square-new-york-city-istock-487537456-2-1501663358549.jpg',
        id: 'fjdsklafjldksafjlkdsafj123',
        title: 'Meetup in NewYork',
        date: new Date(),
        location: 'New York',
        description: 'Come on!!! New York meetup!!!!'
      },
      {
        imageUrl: 'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/09/shutterstock_407897917-lotte-world-tower-seoul-61bbde30f1cf.jpg',
        id: 'fjdsklafjldksafjlkdsafj112345',
        title: 'Meetup in Seoul',
        date: new Date(),
        location: 'Seoul',
        description: 'Come on!!! Seoul meetup!!!!'
      }
    ],
    user: {
      id: 'fjsdajfisfsdid123',
      regitseredMeetups: ['fjdskajfdsafadsregister']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'fjdsoajfpodsjaofjopewjf123'
      }
      // 파이어베이스에 저장
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
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
    },
    user (state) {
      return state.user
    }
  }
})
