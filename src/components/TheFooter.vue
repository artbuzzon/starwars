<template>
    <div :class="$style.container">
        API&nbsp;|&nbsp;
        <a href="https://swapi.dev/api" target="_blank">https://swapi.dev/api</a>
    </div>
</template>

<style lang="scss" module>

.container {
    min-height: 35px;
    color: #ffffff;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    & a:link,
    a:visited, {
        color: #ffffff;
        margin-left: 4px;
    }
}

</style>