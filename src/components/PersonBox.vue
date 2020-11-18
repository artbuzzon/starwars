<template>
    <div :class="$style.container">
        <h4>{{ person.name }}</h4>
        <div :class="$style.person">
            <div :class="$style.personDetails">
                <p>Gender: <strong>{{ person.gender }}</strong></p>
                <p>Height: <strong>{{ person.height }}</strong></p>
                <p>Mass: <strong>{{ person.mass }}</strong></p>
            </div>
            <div :class="$style.personShips">
                <div :class="$style.shipsHeader">
                    <strong>Starships:</strong>
                </div>
                <div v-if="isLoading">
                    <span :class="$style.spinner"></span>
                </div>
                <div v-else :class="$style.chipsContainer">
                    <template v-if="ships.length">
                        <span v-for="ship in ships" :key="ship"
                              :class="[$style.chip]">
                            {{ ship }}
                        </span>
                    </template>
                    <template v-else>
                        <span :class="[$style.chip, $style.noShip]">
                            I don't have a starship
                        </span>
                    </template>
                </div>
            </div>
        </div>
        <router-link :to="{name: 'person-details', params: {index: personIndex}}" :class="$style.button">Learn more
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true,
        },
        personIndex: {
            type: [String, Number],
            required: true,
        },
    },
    data() {
        return {
            ships: [],
            isLoading: false,
        };
    },
    created() {
        this.isLoading = true;
        this.$store.dispatch('fetchDetails', this.person.starships).then((ships) => {
            this.ships = ships.map(ship => ship.data.name);
            this.isLoading = false;
        });
    },
};
</script>

<style lang="scss" module>

.container {
    flex: 1 1 calc(50% - 4rem);
    margin: 0 1.5rem 1.5rem;
    display: flex;
    min-width: 200px;
    flex-direction: column;
    color: #0C5460;
    font-size: 1.6rem;
    padding: 1.5rem 1.8rem;
    border-radius: 4px;
    background-color: #d1ecf1;
    border: 1px solid darken(#d1ecf1, 10);

    & > h4 {
        font-weight: 400;
        font-size: 2.4rem;
    }
}

.person {
    display: flex;
    border-bottom: 1px solid darken(#d1ecf1, 10);
    padding: 1rem 0;
    margin-bottom: 2rem;

    .personDetails {
        flex: 1;

        & > p {
            padding: .2rem 0;
        }
    }

    .personShips {
        flex: 1;
    }
}

.button {
    margin-left: auto;
    color: #ffffff;
    background-color: #33a2b8;
    border: none;
    padding: .8rem 1rem;
    font-size: inherit;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: background-color .3s;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
        background-color: darken(#33a2b8, 15);
    }

    &:focus {
        box-shadow: 0 0 .3rem .3rem lighten(#33a2b8, 20);
    }
}

.shipsHeader {
    margin-bottom: .5rem;
}

.chip {
    color: #ffffff;
    display: inline-block;
    font-weight: 700;
    background-color: #33a2b8;
    font-size: 1.2rem;
    border-radius: 3px;
    padding: .3rem .7rem;
    margin-bottom: .4rem;

    &:not(:last-child) {
        margin-right: .4rem;
    }
}

.noShip {
    background-color: #e94545;
}

.spinner {
    border-radius: 50%;
    border: 2px solid #33a2b8;
    border-bottom-color: transparent;
    display: inline-block;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
}


@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@media screen and (max-width: 53.12em) {
    .person {
        flex-direction: column;
    }

    .personShips {
        margin-top: 2rem;
    }
}
</style>