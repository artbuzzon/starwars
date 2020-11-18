<template>
    <div :class="$style.container">
        <AppSpinner v-if="isLoading"/>
        <PersonBox v-for="(person, index) in people" :key="person.name" :person="person" :person-index="index + 1"/>
        <ThePagination :current-page="currentPage" :pages-count="pagesCount"/>
    </div>
</template>

<script>
import AppSpinner from '../components/AppSpinner.vue';
import PersonBox from '@/components/PersonBox';
import ThePagination from '@/components/ThePagination';
import {PERSONS_PER_PAGE} from '@/assets/config';

export default {
    data() {
        return {
            isLoading: false,
            people: [],
            totalPersons: null,
        };
    },
    created() {
        this.isLoading = true;
        this.$store.dispatch('fetchPeople', {
            page: parseInt(this.currentPage) || null,
        }).then((data) => {
            this.people = data.results;
            this.totalPersons = data.count;
            this.isLoading = false;
        });
    },
    computed: {
        pagesCount() {
            return Math.ceil(this.totalPersons / PERSONS_PER_PAGE);
        },
        currentPage() {
            return this.$route.query.page ? parseInt(this.$route.query.page) : 1;
        },
    },
    components: {
        AppSpinner,
        PersonBox,
        ThePagination,
    },
};
</script>

<style lang="scss" module>

.container {
    padding: 2.5rem 0;
    display: flex;
    flex-wrap: wrap;
}

</style>