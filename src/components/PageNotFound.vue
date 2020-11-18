<template>
    <div :class="$style.container">
        <strong :class="$style.error">404</strong>
        <strong :class="$style.message">Page is not found</strong>
        <router-link :to="{name: 'people-list'}">Go to main page</router-link>
    </div>
</template>

<style lang="scss" module>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 60vh;
}

.error {
    color: #dc3545;
    font-size: 12rem;
    margin-bottom: 4rem;
}

.message {
    font-size: 2.5rem;
    margin-bottom: 4rem;
}

</style>