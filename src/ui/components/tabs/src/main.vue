<template>
    <view class='m-tabs'>
        <view class='m-tabs__header'>
          <view class='m-tabs__navs'>
            <tab-nav
                :pane='pane'
                :closable='closable'
                :disabled='pane.disabled'
                :name='pane.name || index'
                @remove='handleRemove'
                v-for='(pane,index) in panes'
                :key='index'>
            </tab-nav>
          </view>
          <view class='m-tabs__toolbar'>
            <slot name='toolbar'></slot>
          </view>
        </view>
        <view class='m-tabs__body'>
          <slot name='default'></slot>
        </view>
    </view>
</template>

<script>
import TabNav from './nav'
export default {
  name: 'mTabs',
  components: {
    TabNav
  },
  props: {
    value: {
      type:String,
      default:''
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: '',
      panes: []
    }
  },
  methods: {
    handlePanes () {
      const slots = this.$slots.default.filter(VNode => {
        return VNode.tag && VNode.componentInstance && (VNode.componentOptions.tag === 'm-tab-pane')
      })
      if (this.panes.length === slots.length) {
        return false
      }
      this.panes = []
      slots.forEach((slot, index) => {
        this.panes.push(slot.componentInstance)
      })
    },
    handleRemove (name) {
      if (name) {
        this.$emit('remove', name)
      }
    },
    handleChange (name) {
      this.$emit('input', name)
      this.$emit('change', name)
    }
  },
  created () {
    this.model = this.value
  },
  updated () {
    this.handlePanes()
  },
  mounted () {
    this.handlePanes()
  }
}
</script>