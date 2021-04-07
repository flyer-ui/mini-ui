<template>
    <view class='m-drawer' v-show='model' :style='{"width":width}' @touchmove.stop.prevent="handleStop">
        <view class='m-drawer__mask' v-if='showMask' @click='handleClickMask'></view>
        <view :class='["m-drawer__content",`is-${this.position}`]'>
            <view class='m-drawer__header' v-if='$slots.header'>
                <slot name='header'></slot>
                <i class='fly-icon m-drawer__close fly-icon-close' v-if='showClose' @click='handleClose'></i>
            </view>
            <view class='m-drawer__body'>
                <slot name='default'></slot>
            </view>
            <view class='m-drawer__footer' v-if='$slots.footer'>
              <slot name='footer'></slot>
            </view>
        </view>
    </view>
</template>
<script>
export default {
  name: 'mDrawer',
  props: {
    value: Boolean,
    width: String,
    showClose: {
      type: Boolean,
      default: true
    },
    showMask: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    position:{
      type:String,
      default:'bottom' // bottom | top | right | left
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    handleClose ($event) {
      this.model = false
      this.$emit('closed', $event)
    },
    handleClickMask ($event) {
      if (this.maskClosable) {
        this.model = false
        this.$emit('closed', $event)
      }
    },
    handleStop(){
      return;
    }
  }
}
</script>