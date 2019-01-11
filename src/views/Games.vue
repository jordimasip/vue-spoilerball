<template>
    <div class="mt-5">
        <b-row>
            <b-col>
                <h3>Select a date to see the results</h3>
            </b-col>
        </b-row>
        <b-form>
            <b-row>
                <b-col>
                    <b-form-group
                        labe-for="from"
                    >
                        <datepicker
                            v-model="selectedDate"
                            id="to"
                            name="to"
                            :minimumView="'day'"
                            :maximumView="'year'"
                            :language="languages[lang]"
                            :format="'dd MMM yyyy'"
                            :bootstrap-styling="true"
                        ></datepicker>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-button
                        @click.prevent="search"
                        variant="primary"
                    >
                        Search
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
        <div v-if="games.length">
            <b-row 
                v-for="game in games" 
                :key="game.id"
                class="mb-2">
                <b-col cols="2">{{game.away_team}}</b-col>
                <b-col cols="1">{{game.away_points_scored}}</b-col>
                <b-col cols="1">@</b-col>
                <b-col cols="2">{{game.home_team}}</b-col>
                <b-col cols="1">{{game.home_points_scored}}</b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import * as langs from "vuejs-datepicker/src/locale";
    import {mapActions, mapState} from 'vuex'
    export default {
        data() {
            return {
                languages: langs,
                lang: 'en',
                selectedDate: new Date(2018, 11, 25),
            }
        },
        components: {
            Datepicker
        },
        computed: {
            ...mapState('games', ['games'])
        },
        mounted() {
            this.fetchGamesByDate(this.selectedDate)
        },
        methods: {
            ...mapActions('games', ['fetchGamesByDate']),
            search() {
                console.log('busca ',this.selectedDate);
                this.fetchGamesByDate(this.selectedDate)
            }
        }
    }
</script>
