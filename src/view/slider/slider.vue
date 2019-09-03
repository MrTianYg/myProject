<template>
  <div class="v-slider">
    <div class="v-slider-btn btn-prev">
      <i style="font-size: 32px;" ref="prev" class="el-icon-arrow-left" @click="handleBtnClick('prev')"></i>
    </div>
    <div class="v-slider-body">
      <div ref="slider" class="v-slider-slot">
        <slot></slot>
      </div>
    </div>
    <div class="v-slider-btn btn-next">
      <i style="font-size: 32px;" ref="next" class="el-icon-arrow-right" @click="handleBtnClick('next')"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'v-slider',
  data () {
    return {
      slider: null,
      items: 0,
      itemGap: 0,
      itemWidth: 0,
      itemCount: 0,
      movedItemCount: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.slider = this.$refs.slider
      const container = document.querySelector('.v-slider-body')
      const items = this.items = this.slider.children

      const containerStyle = window.getComputedStyle(container) // 返回一个对象，取值的时可以直接（containerStyle.width）
      const itemStyle = window.getComputedStyle(items[0])
      const containerWidth = parseFloat(containerStyle.width)
      const itemWidth = this.itemWidth = parseFloat(itemStyle.width)

      const itemCount = this.itemCount = Math.floor(containerWidth / itemWidth) // 容器宽/图片宽

      // >1，可放至少两个图片宽，否则就放一个图片
      if (itemCount > 1) {
        const itemGap = this.itemGap = (containerWidth - itemCount * itemWidth) / (itemCount - 1)
        for (let i = 0, len = items.length; i < len; i++) {
          if (i < len - 1) {
            items[i].style.marginRight = itemGap + 'px'
          }
        }
      } else {
        const itemGap = this.itemGap = (containerWidth - itemCount * itemWidth) / 2
        for (let i = 0, len = items.length; i < len; i++) {
          items[i].style.margin = `0 ${itemGap}px`
        }
      }

      this.canMove()
    },

    canMove () {
      let canMove = {prev: false, next: false}
      const maxDeviationCount = this.items.length - this.itemCount

      if (this.movedItemCount >= maxDeviationCount) {
        canMove = {prev: false, next: true}
        this.$refs.prev.classList.add('disabled')
      } else if (this.movedItemCount <= 0) {
        canMove = {prev: true, next: false}
        this.$refs.next.classList.add('disabled')
      } else {
        canMove = {prev: true, next: true}
        this.$refs.prev.classList.remove('disabled')
        this.$refs.next.classList.remove('disabled')
      }

      return canMove
    },

    handleBtnClick (direction) {
      const canMove = this.canMove()

      if (direction === 'prev' && !canMove.prev) {
        return null
      } else if (direction === 'next' && !canMove.next) {
        return null
      }
      const prevLeftValue = parseFloat(this.slider.style.left) || 0

      if (direction === 'prev' && canMove.prev) {
        this.slider.style.left = (prevLeftValue - (this.itemWidth + this.itemGap)) + 'px'
        this.movedItemCount++
      } else if (direction === 'next' && canMove.next) {
        this.slider.style.left = (prevLeftValue + (this.itemWidth + this.itemGap)) + 'px'
        this.movedItemCount--
      }

      this.canMove()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-slider
    display flex
    flex-flow row nowrap
    height 100%

    .v-slider-body
      flex 1 1 auto
      overflow hidden

      .v-slider-slot
        position relative
        left 0
        display flex
        flex-flow row nowrap
        transition all ease 1s

        & > *
          flex 0 0 auto

    .v-slider-btn
      display flex
      flex-flow row nowrap
      justify-content center
      align-items center
      flex 0 0 42px

      & > i
        cursor pointer

        &.disabled
          cursor not-allowed
</style>
