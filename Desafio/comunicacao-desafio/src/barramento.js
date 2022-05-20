import Vue from "vue"

export default new Vue({
    methods: {
        setSelectUser(UserSelect){
            this.$emit('selectUser', UserSelect)
        },
        onSetSelectUser(callback){
            this.$on('selectUser',callback)
        }
    },
})