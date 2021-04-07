<template>
    <div class='m-form__item'>
        <div class='m-form__item-label'>
            {{label}}<i v-if='required' class='m-form__item-required'>*</i>
        </div>
        <div :class='["m-form__item-content",{"is-error":errorText.length>0}]'>
            <slot name='default'>
            </slot>
            <div v-if='visibleError' class='m-form__item-error'>
                {{errorText}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'mFormItem',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    visibleError:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      errorText: ''
    }
  },
  methods: {
    showError (message) {
      this.errorText = message
    },
    hideError () {
      this.errorText = ''
    }
  }
}
</script>
