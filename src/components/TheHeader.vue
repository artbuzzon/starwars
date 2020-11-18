<template>
    <div :class="$style.container">
        <router-link :to="{name: 'people-list'}">
            <img :class="$style.icon" src="../assets/sw_logo.png">
        </router-link>
    </div>
</template>

<style lang="scss" module>
.container {
    z-index: 100;
    background: #000 url("../assets/milkyway.jpg") 50% no-repeat;
    background-size: cover;
    padding: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 .3rem .6rem rgba(#000, .2);
}

.icon {
    height: 3.5rem;
    display: block;
    margin: auto;
}
</style>