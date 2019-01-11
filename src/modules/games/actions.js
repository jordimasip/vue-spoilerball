import Vue from 'vue'

export async function fetchGamesByDate({commit}, selectedDate) {
    console.log('data que arriba ',selectedDate);
    var stringDate = selectedDate.getFullYear().toString() + (selectedDate.getMonth() + 1).toString() + selectedDate.getDate().toString()
    console.log('data que queda ',stringDate);
    try {
        const { data } = await Vue.axios({
            url: `/nbagames?date=${stringDate}`
        })
        console.log("data ",data)
        commit('setGames', data)
    } catch(e) {
        console.log('error')
    } finally {
        console.log('La petición para obtener los partidos ha finalizado')
    }
}