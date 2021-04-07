<template>
  <view :style="style" :class="['m-col-' + this.span, this.offset > 0 ? ' m-col-offset-' + this.offset : '']">
    <slot name='default'></slot>
  </view>
</template>
<script>
export default {
  name: 'mCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: [Number],
      default: 0
    },
    align: {
      type: String,
      default: 'left'
    },
    tagName: {
      type: String,
      default: 'view'
    }
  },
  computed: {
    style () {
      return {
        'padding-left': this.$parent.gutter > 0 ? `14rpx` : '',
        'padding-right': this.$parent.gutter > 0 ? `14rpx` : '',
        'text-align': this.align
      }
    }
  }
}
</script>