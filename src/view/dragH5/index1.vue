<template>
  <div id="drag-h5">
    <el-row :gutter="30">
      <el-col :span="12">
        <h1>预备元素</h1>
        <div class="drag-wrap">
          <span id="drag1" draggable="true" @dragstart="drag">
            <el-button>拖拽1</el-button>
          </span>
          <span id="drag2" draggable="true" @dragstart="drag">
            <el-button>拖拽2</el-button>
          </span>
          <span id="drag3" draggable="true" @dragstart="drag">
            <el-button>拖拽3</el-button>
          </span>
          <span id="drag4" draggable="true" @dragstart="drag">
            <el-button>拖拽4</el-button>
          </span>
        </div>
      </el-col>
      <el-col :span="12">
        <h1>拖拽至此区域</h1>
        <div class="drop-wrap" @drop.prevent="drop" @dragover.prevent="allowDrop"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'dragH5',
  methods: {
    drag (event) {
      console.log('drag===', event.target)
      event.dataTransfer.setData('abc', event.target.id)
    },
    drop (event) {
      console.log('drop==', event)
      let data = event.dataTransfer.getData('abc')
      let node = document.getElementById(data).cloneNode(true)
      event.target.appendChild(node)
    },
    allowDrop (event) {
      console.log('dragover==')
    }
  }
}
</script>

<style lang="stylus" scoped>
#drag-h5
  .drag-wrap
    width 400px
    height 300px
    background-color #66aa44
  .drop-wrap
    width 400px
    height 300px
    background-color #aa4433
</style>
