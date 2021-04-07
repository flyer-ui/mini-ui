<template>
    <span :class='["m-tag",`m-tag--${type}`,`m-tag--${size}`,{"is-plain":plain}]'>
        <slot></slot>
        <span class='m-tag__close' v-if='closable'>
            <i class='m-icon fly-icon-close m-tag__close' @click='handleClose'></i>
        </span>
    </span>
</template>
<script>
export default {
  name: 'mTag',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return ['default', 'primary', 'success', 'info', 'warning', 'danger'].indexOf(value) > -1
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    plain:{
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['large', 'medium', 'small'].indexOf(value) > -1
      }
    }
  },
  data () {
    return {
      selfShow: true
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>
