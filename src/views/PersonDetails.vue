<template>
    <div :class="$style.container">
        <template v-if="isLoading">
            <LoadingIcon/>
        </template>
        <template v-else>
            <div :class="$style.header">
                <h2>{{ person.name }}</h2>
                <router-link :to="{name: 'people-list'}" :class="$style.button">Back to list</router-link>
            </div>
            <div :class="$style.detailsContainer">
                <div :class="$style.details">
                    <p :class="$style.detailsItem">Birth Year: <strong>{{ person.birth_year }}</strong></p>
                    <p :class="$style.detailsItem">Gender: <strong>{{ person.gender }}</strong></p>
                    <p :class="$style.detailsItem">Height: <strong>{{ person.height }}</strong></p>
                    <p :class="$style.detailsItem">Mass: <strong>{{ person.mass }}</strong></p>
                    <p :class="$style.detailsItem">Hair Color: <strong>{{ person.hair_color }}</strong></p>
                    <p :class="$style.detailsItem">Skin Color: <strong>{{ person.skin_color }}</strong></p>
                    <p :class="$style.detailsItem">Eye Color: <strong>{{ person.eye_color }}</strong></p>
                </div>
                <div :class="$style.films">
                    <h4>Films</h4>
                    <div :class="$style.chipsContainer">
                        <template v-if="films.length">
                            <span v-for="film in films" :key="film" :class="[$style.chip]">
                                {{ film }}
                            </span>
                        </template>
                        <template v-else>
                            <span>
                                No data
                            </span>
                        </template>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import LoadingIcon from '@/components/AppSpinner';
export default {
    props: {
        index: {
            type: [Number, String],
            default: 1,
        },
    },
    data() {
        return {
            films: [],
            person: {},
            isLoading: false,
        };
    },
    created() {
        this.isLoading = true;
        this.$store.dispatch('fetchPerson', this.index).then((person) => {
            if (person) this.person = person;
            else throw new Error('person is not defined');
        }).then(() => {
            if (this.person.films.length !== 0) {
                this.$store.dispatch('fetchDetails', this.person.films).then((films) => {
                    this.films = films.map(film => film.data.title);
                    this.isLoading = false;
                });
            }
        });
    },
    components: {
        LoadingIcon,
    },
};
</script>

<style lang="scss" module>

.container {
}

.header {
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lighten(lightgray, 10);

    h2 {
        font-size: 3.2rem;
        font-weight: 400;
    }
}

.button {
    margin-left: auto;
    color: #ffffff;
    background-color: #28a745;
    border: none;
    padding: .8rem 1rem;
    font-size: 1.4rem;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: background-color .3s;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
        background-color: darken(#28a745, 15);
    }

    &:focus {
        box-shadow: 0 0 .3rem .3rem lighten(#28a745, 20);
    }
}

.detailsContainer {
    display: flex;
    padding-top: 2rem;
}

.details {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #0C5460;
    font-size: 1.6rem;
    margin-right: 3rem;
    border-radius: 4px;
    background-color: #bee5eb;
    border: 1px solid darken(#d1ecf1, 10);
}

.detailsItem {
    padding: 1.5rem 2rem;

    &:not(:last-child) {
        border-bottom: 1px solid darken(#d1ecf1, 15);
    }
}

.films {
    flex: 1;

    h4 {
        font-size: 2.4rem;
        font-weight: 400;
    }
}

.chip {
    color: #ffffff;
    display: inline-block;
    font-weight: 700;
    background-color: #33a2b8;
    font-size: 1.4rem;
    border-radius: 3px;
    padding: .3rem .7rem;
    margin-bottom: .4rem;

    &:not(:last-child) {
        margin-right: .4rem;
    }
}

@media screen and (max-width: 46.8em) {
    .detailsContainer {
        flex-direction: column;
    }

    .films {
        margin-top: 2rem;
    }
}

</style>