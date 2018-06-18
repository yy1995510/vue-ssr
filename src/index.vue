<template>
    <div>
        <span>{{txt}}</span>
        <img class="test" src="./assets/images/640.gif" alt="404">
        <span></span>
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
.test
  color red
  transform scale(.5)
</style>
