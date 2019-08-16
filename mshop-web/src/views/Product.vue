<template>
    <div>
        物品详情
    </div>
</template>

<script>
    export default {
        props:{
            id:''
        },
        data() {
            return {
                model: {}
            }
        },
        methods: {
            async fetch() {
                const res = await this.$http.get(`/good/${this.id}`)
                this.model = res.data
            }
        },
        created () {
            this.fetch();
        },
    }
</script>

<style lang="scss" scoped>

</style>