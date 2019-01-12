import Vue from 'vue'

export async function fetchGamesByDate({commit}, selectedDate) {
    var monthZero = (selectedDate.getMonth() + 1).toString()
    if (monthZero.length == 1) {
        monthZero = '0' + monthZero
    }
    var dayZero = selectedDate.getDate().toString();
    if (dayZero.length == 1) {
        dayZero = '0' + dayZero
    }
    var stringDate = selectedDate.getFullYear().toString() + monthZero + dayZero
    try {
        const { data } = await Vue.axios({
            url: `/nbagames?date=${stringDate}`
        })
        commit('setGames', data)
    } catch(e) {
        console.log('error')
    } finally {
        console.log('La petición para obtener los partidos ha finalizado')
    }
}