<template>
    <div class="mt-5">
        <b-row>
            <b-col>
                <h5>Select a date</h5>
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
                            @selected="search"
                        ></datepicker>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-button
                        @click.prevent="search"
                        variant="secondary"
                    >
                        Search
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
        <div v-if="games.length">
            <h4>Scores for {{ selectedDate | formatDate }}</h4>
            <b-row  
                v-for="row in Math.ceil(games.length / numberOfColumns)" 
                :key="row"
                class="mb-3"
            >
                <b-col 
                    v-for="game in games.slice((row - 1) * numberOfColumns, row * numberOfColumns)"
                    :key="game.id"
                    class="col-6"
                >
                    <game-item 
                        :game="game"
                    ></game-item>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style lang="stylus">
    body 
	    background-color #F5F5F5
</style>

<script>
    import moment from 'moment'
    import Datepicker from 'vuejs-datepicker';
    import * as langs from "vuejs-datepicker/src/locale";
    import {mapActions, mapState} from 'vuex'
    import GameItem from '@/components/GameItem';

    export default {
        data() {
            return {
                languages: langs,
                lang: 'en',
                selectedDate: this.yesterdayDate(),
                numberOfColumns: 2
            }
        },
        filters: {
            formatDate: function (value) {
                if (value) {
                    return moment(String(value)).format("MMM Do YY")
                }
            }
        },
        components: {
            Datepicker,
            GameItem
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
            },
            yesterdayDate() {
                var date = new Date()
                date.setDate(date.getDate() - 1)
                return date;
            }
        }
    }
</script>
