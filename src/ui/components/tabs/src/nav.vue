<template>
  <view @click="handleClick" :class="['m-tabs__nav',
          {'is-active': active},
          {'is-closable': closable},
          {'is-disabled': disabled}]">
          <view :class="['m-tabs__nav-text',{'is-active': active}]">
            {{pane.$slots.label || pane.label}}
          </view>
          <i v-if='closable' class='m-icon m-icon-close m-tabs__close' @click="handleRemove"></i>
  </view>
</template>
<script>
  import {findParentByName} from '../../../../ui/utils'
  export default {
    name: 'mTagNav',
    props: {
      pane: {
        type: Object,
        default () {
          return {}
        },
        require: true
      },
      name: {
        type:String,
        default:""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      active () {
        return this.parent.value === this.name
      },
      parent: {
        get () {
          return findParentByName('mTabs', this)
        }
      }
    },
    methods: {
      handleClick ($event) {
        if (this.disabled) {
          return false
        }
        this.parent.handleChange(this.name)
      },
      handleRemove ($event) {
        if (this.disabled) {
          return false
        }
        $event.stopPropagation()
        this.$emit('remove', this.name)
      }
    }
  }
</script>