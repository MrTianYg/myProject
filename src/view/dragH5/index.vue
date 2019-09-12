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
        <div class="drop-wrap" contenteditable="true" @drop.prevent="drop" @dragover.prevent="allowDrop"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'dragH5',
  data () {
    return {
      drapText: ''
    }
  },
  methods: {
    drag (event) {
      event.dataTransfer.setData('Text', event.target.innerText)
    },
    drop (event) {
      let data = event.dataTransfer.getData('Text')
      // 创建元素节点<span>
      let node = document.createElement('span')
      // 设置属性'contenteditable': 'true'（可编辑） 'false'（不可编辑）
      node.setAttribute('contenteditable', 'false')
      node.innerText = '[' + data + ']'
      event.target.appendChild(node)
    },
    allowDrop (event) {}
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
    color #5394ff
    font-size 16px
    text-align left
    background-color #aa4433
</style>
