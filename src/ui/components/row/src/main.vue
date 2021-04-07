<template>
  <view :style='style' :class="['m-row', type === 'flex' ? 'm-row--flex' : '']">
    <slot name='default'></slot>
  </view>
</template>
<script>
export default {
  name: 'mRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'flex'
    },
    justifyContent: {
      type: String,
      default: 'stretch',
      validator (value) {
        return ['stretch', 'flex-start', 'flex-end', 'center', 'space-around', 'space-between'].indexOf(value) > -1
      }
    },
    alignItems: {
      type: String,
      default: 'stretch',
      validator (value) {
        return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) > -1
      }
    },
    tagName: {
      type: String,
      default: 'view'
    }
  },
  computed: {
    style () {
      return {
        'margin-left': this.gutter > 0 ? `-14rpx` : '',
        'margin-right': this.gutter > 0 ? `-14rpx` : '',
        'justify-content': this.justifyContent,
        'align-items': this.alignItems
      }
    }
  }
}
</script>