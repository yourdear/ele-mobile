<template>
    <div class="star" :class="starType">
        <span v-for="itemClass in ItemClasses" :class="itemClass" class="star-item" :key="itemClass"></span>
    </div>
</template>
<script>
    export default {
        props: {
            size: Number,
            score: Number
        },
        data() {
            return {
                ItemClasses: []
            }
        },
        computed: {
            starType() {
                return 'star-' + this.size
            }
        },
        created() {

        },
        methods: {},

    }
</script>

<style lang="stylus">
    .star
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
        &.star-36
        &.star-24
</style>
