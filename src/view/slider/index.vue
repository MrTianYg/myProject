<template>
  <div class="hello">
    <v-slider>
      <img :key="i.id" v-for="i in imgList" style="width: 500px" :src="i.src">
    </v-slider>
  </div>
</template>

<script>
import VSlider from './slider'
export default {
  name: 'HelloWorld',
  components: {VSlider},
  data () {
    return {
      imgList: [
        {id: 1, src: '/static/image/big.jpg'},
        {id: 2, src: '/static/image/Inkedbig_2.jpg'},
        {id: 3, src: '/static/image/Inkedbig_3.jpg'},
        {id: 4, src: '/static/image/Inkedbig_4.jpg'}
      ]
    }
  },
  computed: {}
}
</script>

<style lang="stylus" scoped>

</style>
