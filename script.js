const { createApp } = Vue

createApp({
    data() {
        return {
            isSmall: true,
        }
    },
    computed: {
        isSmall() {
            return this.windowWidth <= 1024;
            console.log(this.isSmall);
        },
    },
}).mount('#app');