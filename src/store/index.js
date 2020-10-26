import Vue from 'vue'
import Vuex from 'vuex'
//import Axios from 'axios'
import Api from '../services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        CurrentIssue: {},
        loadingIssue: true,
        article: {}
    },
    mutations: {
        SET_CURRENT_ISSUE(state, contents) {
            state.CurrentIssue = contents
            state.loadingIssue = false
        },

        SET_ARTICLE(state, contents) {
            state.article = contents
        }
    },
    actions: {
        loadCurrentIssue({ commit }, language) {
            Api()
                .get(`/current-issue/${language}`)
                .then((response) => response.data)
                .then((content) => {
                    const issue = content.data
                    commit('SET_CURRENT_ISSUE', issue)
                })
        },
        loadArticle({ commit }, article_id) {
            Api()
                .get(`/articles/${article_id}`)
                .then((response) => response.data.article)
                .then((content) => {
                    commit('SET_ARTICLE', content)
                })
        },
    },
    getters: {
        CurrentIssue: (state) => {
            return state.CurrentIssue
        },
        Article: (state) => {
            return state.article
        },
    },
    modules: {},
})