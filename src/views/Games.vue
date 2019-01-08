<template>
    <div class="mt-5">
        <b-row>
            <b-col>
                <h2>Games</h2>
            </b-col>
        </b-row>
        <b-form>
            <b-row>
                <b-col>
                    <b-form-group
                        label="Games for"
                        labe-for="from"
                    >
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
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        components: {
        },
        mounted() {
            this.fetchGamesByDate()
        },
        methods: {
            ...mapActions('games', ['fetchGamesByDate'])
        }
    }
</script>
