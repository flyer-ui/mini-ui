<template>
    <view :class='["m-modal",styles]' @click='handleModal' v-if="model">
      <view class='m-modal__content' :style='{"width":width,"height":height}'>
        <view class='m-modal__header'>
          <slot name='header'>
            <i v-if='icon' :class='["m-icon m-modal__icon",icon]'></i>
            {{title}}
            </slot>
        </view>
        <i v-if='closable' class='m-icon m-icon-close m-modal__close' @click='handleClose'></i>
        <view class='m-modal__body'>
          <slot name='default'>{{content}}</slot>
        </view>
        <view class='m-modal__footer'>
          <slot name='footer'>
            <m-button class='m-modal__button' type='primary' plain size='medium' :loading='showLoading' @click='handleConfrim'>{{confirmText}}</m-button>
            <m-button class='m-modal__button' v-if='showCancel' size='medium' @click='handleCancel'>{{cancelText}}</m-button>
          </slot>
        </view>
      </view>
    </view>
</template>
<script>
export default{
  name: 'mModal',
  props: {
    value: Boolean,
    title: String,
    content: String,
    closable: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '80%'
    },
    height: {
      type: String
    },
    confirmLoading: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    icon: String,
    type: {
      type: String,
      validator (value) {
        return ['success', 'confirm', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      selfModel: undefined,
      showLoading: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.selfModel = value
        this.$emit('input', value)
      }
    },
    styles () {
      return typeof this.type === 'undefined' ? '' : `is-${this.type}`
    },
    showCancel () {
      return ['success', 'info', 'warning', 'danger'].indexOf(this.type) < 0
    }
  },
  watch: {
    model (value) {
      if (!value) {
        this.showLoading = false
      }
    }
  },
  methods: {
    handleClose ($event) {
      this.model = false
      this.$emit('closed', $event)
    },
    handleCancel ($event) {
      this.model = false
      this.$emit('cancel', $event)
    },
    handleConfrim ($event) {
      if (!this.confirmLoading) {
        this.model = false
      } else {
        this.showLoading = this.confirmLoading
      }
      this.$emit('confirm', $event)
    },
    handleModal ($event) {
      if (this.maskClosable) {
        this.model = false
      }
    }
  }
}
</script>