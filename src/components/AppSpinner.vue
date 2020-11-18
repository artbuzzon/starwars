<template>
    <div :class="$style.container">
        <span :class="$style.spinner"></span>
    </div>
</template>

<style lang="scss" module>
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}


@-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.spinner {
    border-radius: 50%;
    border: 4px solid #33a2b8;
    border-bottom-color: transparent;
    width: 80px;
    height: 80px;
    -webkit-animation: spin 1s linear infinite; /* Safari */
    animation: spin 1s linear infinite;
}
</style>