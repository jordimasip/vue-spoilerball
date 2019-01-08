import Vue from 'vue'

export async function fetchGamesByDate({commit}, game) {
    try {
        const { data } = await Vue.axios({
            url: '/nbagames?date=20181027'
        })
        console.log("data ",data)
        commit('setGames', data)
    } catch(e) {
        console.log('error')
    } finally {
        console.log('La petición para obtener los partidos ha finalizado')
    }
}