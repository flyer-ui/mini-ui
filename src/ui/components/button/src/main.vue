<template>
    <button
    :type='nativeType'
    :disabled='disabled'
    @click="handleClick"
    :class='[
    "m-button",
    `m-button--${type}`,
    `m-button--${size}`,
    {
      "is-disabled":disabled,
      "is-loading":loading,
      "is-plain":plain,
      "is-circle":circle,
      "is-round":round
    }
    ]'>
      <i v-if='icon' :class="['fly-icon m-button__icon',icon]"></i>
      <i v-if='loading' class='fly-icon m-button__icon fly-icon-loading'></i>
      <span><slot name='default'></slot></span>
    </button>
</template>
<script>
export default {
  name: 'mButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['large', 'medium', 'small', 'mini'].indexOf(value) > -1
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>