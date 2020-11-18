<template>
    <div>
        <TheHeader/>
        <main :class="$style.main">
            <router-view :key="$route.fullPath"/>
        </main>
        <TheFooter/>
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
export default {
    components: {
        TheHeader,
        TheFooter,
    },
};

</script>

<style lang="scss" module>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-family: 'Roboto', sans-serif;
    color: #26292c;
    font-size: 62.5%; //10px
}

body {
    box-sizing: border-box;
    font-size: 1.6rem;
}

.main {
    position: relative;
    max-width: 60%;
    margin: 7rem auto 0;
    min-height: calc(100vh - 10.5rem)
}

@media screen and (max-width: 75em){
    .main {
        max-width: 80%;
    }
}

</style>
