<template>
    <div :class="$style.container">
        <div @click="changePage(currentPage - 1)"
             :class="[$style.pagItem, {[$style.disabledItem]: isPrevDisabled}]">Previous
        </div>
        <div :class="[$style.pagItem, {[$style.activeItem]: isItemActive(page)}]"
             @click="changePage(page)"
             v-for="page in pagesCount"
             :key="page">
            {{ page }}
        </div>
        <div @click="changePage(currentPage + 1)"
             :class="[$style.pagItem, {[$style.disabledItem]: isNextDisabled}]">Next
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        pagesCount: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        isPrevDisabled() {
            return this.currentPage === null || this.currentPage === 1;
        },
        isNextDisabled() {
            return this.currentPage >= this.pagesCount;
        },
    },
    methods: {
        isItemActive(page) {
            return page === this.currentPage || page === 1 && this.currentPage === null;
        },
        changePage(page) {
            if (page === 0 || page === null || page > this.pagesCount) return;
            this.$router.push({name: 'people-list', query: {page}});
        },
    },
};
</script>

<style lang="scss" module>

.container {
    color: #007bff;
    display: flex;
    margin: 2rem 0;
}

.pagItem {
    border: 1px solid #dee2e6;
    padding: 1rem;
    cursor: pointer;
    min-width: 4rem;
    text-align: center;

    &:hover {
        background-color: #e9ecef;
    }

    &:focus,
    &:active {
       box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }

    &:first-child {
        border-bottom-left-radius: 3px;
        border-top-left-radius: 3px;
        border-right: none;
    }

    &:last-child {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        border-left: none;
    }
}

.activeItem {
    background-color: #0056b3;
    color: #ffffff;
    border-color: #0056b3;

    &:hover {
        background-color: lighten(#0C5460, 5);
    }

}

.disabledItem {
    cursor: default;
    color: lightgray;
    border-color: lightgray;

    &:hover {
        background-color: transparent;
    }
}

</style>