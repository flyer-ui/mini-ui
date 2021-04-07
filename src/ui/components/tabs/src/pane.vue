<template>
    <view :class='["m-tabs__pane",{"is-active":active}]'>
        <slot name='default'></slot>
    </view>
</template>

<script>
import {findParentByName} from '../../../utils'
export default {
  name: 'mTabPane',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    name: {
      type:String,
      default:''
    }
  },
  computed: {
    parent () {
      return findParentByName('mTabs', this)
    },
    active () {
      return this.name === this.parent.value
    }
  }
}
</script>