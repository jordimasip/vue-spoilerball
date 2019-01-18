<template>
    <div class="card">
        <div class="card-body">
            <b-row class="mb-4">
                <b-col cols="2"><b-img class="logo" :src="getImg(game.away_team)" /></b-col>
                <b-col cols="8" class="mt-2">{{fullName(game.away_team)}}</b-col>
                <b-col cols="2" class="mt-2"><span v-if="isVisible"><b>{{game.away_points_scored}}</b></span></b-col>
            </b-row>

            <b-row class="mb-3">
                <b-col cols="2"><b-img class="logo" :src="getImg(game.home_team)" /></b-col>
                <b-col cols="8" class="mt-2">{{fullName(game.home_team)}}</b-col>
                <b-col cols="2" class="mt-2"><span v-if="isVisible"><b>{{game.home_points_scored}}</b></span></b-col>
            </b-row>

            <b-row>
                <b-col cols="10">
                    <b-button v-if="!isVisible" @click="showResult">Show result</b-button>
                    <b-button v-if="isVisible" @click="showResult">Hide result</b-button>
                </b-col>
                <b-col cols="2">
                    <b-button v-if="isVisible" @click="openGameBook"><font-awesome-icon icon="file-pdf" /></b-button>
                </b-col>
            </b-row>
        </div>
    </div>
    
</template>

<style lang="stylus">

    .logo
        max-height 50px
        max-width 50px
        display block
        margin auto

    .card
        min-height 250px
        font-size 24px

    .card-footer
        background #808080
        color white
</style>

<script>

export default {
    data() {
        return {
            isVisible: false
        }
    },
    props: {
        game: {
            type: Object,
            required: true,
        }
    },
    methods: {
        openGameBook() {
            window.open(`https://data.nba.net/10s/prod/v1/${this.game.event_date}/${this.game.event_id}_Book.pdf`, '_blank');
        },
        showResult() {
            this.isVisible = !this.isVisible
        },
        getImg(name_team) {
            var pathImg = name_team.toLowerCase() + '.png';
            return require('../assets/'+pathImg)
        },
        fullName(name_team) {
            if(name_team == "ATL") {
                return `Hawks`
            } else if(name_team == "BKN") {
                return `Nets`
            } else if(name_team == "BOS") {
                return `Celtics`
            } else if(name_team == "CHA") {
                return `Hornets`
            } else if(name_team == "CHI") {
                return `Bulls`
            } else if(name_team == "CLE") {
                return `Cavaliers`
            } else if(name_team == "DAL") {
                return `Mavericks`
            } else if(name_team == "DEN") {
                return `Nuggets`
            } else if(name_team == "DET") {
                return `Pistons`
            } else if(name_team == "GSW") {
                return `Warriors`
            } else if(name_team == "HOU") {
                return `Rockets`
            } else if(name_team == "IND") {
                return `Pacers`
            } else if(name_team == "LAC") {
                return `Clippers`
            } else if(name_team == "LAL") {
                return `Lakers`
            } else if(name_team == "MEM") {
                return `Grizzlies`
            } else if(name_team == "MIA") {
                return `Heat`
            } else if(name_team == "MIL") {
                return `Bucks`
            } else if(name_team == "MIN") {
                return `Timberwolves`
            } else if(name_team == "NOP") {
                return `Pelicans`
            } else if(name_team == "NYK") {
                return `Knicks`
            } else if(name_team == "OKC") {
                return `Thunder`
            } else if(name_team == "ORL") {
                return `Magic`      
            } else if(name_team == "PHI") {
                return `76ers`
            } else if(name_team == "PHX") {
                return `Suns`
            } else if(name_team == "POR") {
                return `Blazers`
            } else if(name_team == "SAC") {
                return `Kings`
            } else if(name_team == "SAS") {
                return `Spurs`
            } else if(name_team == "TOR") {
                return `Raptors`
            } else if(name_team == "UTA") {
                return `Jazz`
            } else if(name_team == "WAS") {
                return `Wizards`                           
            }  else {
                return name_team
            }
        }
    }
}
</script>