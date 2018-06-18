<template>
    <div>
        <span>{{txt}}</span>
        <img src="./assets/images/640.gif" alt="404">
        <v-btn color="primary">Toggle</v-btn>
        <test></test>
    </div>
    
</template>
<script>
import test from './view/test.vue'
export default {
    data () {
        return {
            txt: 'Vue'
        }
    },
    components: {
        test
    }
}
</script>
<style lang="stylus">
body
  font 12px Helvetica, Arial, sans-serif
</style>
