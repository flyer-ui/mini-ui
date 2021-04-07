<template>
    <view class='m-radio'>
        <span :class='["m-radio__input",{
          "is-checked":isChecked,
          "is-disabled":disabled
        }]'></span>
        <span class='m-radio__label'>
          <slot></slot>
        </span>
        <input class='m-radio__input-native'
          v-model="model"
          :disabled="disabled"
          :value='label'
          @change="handleChange"
          :name='name'
          type="radio" />
    </view>
</template>
<script>
import {findParentByName} from '../../../utils'
import emitter from '../../../mixins/emitter'
export default{
  name: 'mRadio',
  mixins: [emitter],
  props: {
    value: {
      type: [String, Boolean, Number]
    },
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.parent.value : this.value
      },
      set (newValue) {
        if (this.isGroup) {
          this.dispatch('mRadioGroup', 'input', newValue)
        } else {
          this.$emit('input', newValue)
        }
      }
    },
    isChecked: {
      get () {
        return this.model === this.label
      }
    },
    isGroup: {
      get () {
        return !!this.parent
      }
    },
    parent: {
      get () {
        return findParentByName('mRadioGroup', this)
      }
    }
  },
  methods: {
    handleChange ($event) {
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('mRadioGroup', 'change', [this.parent.value])
        } else {
          this.$emit('change', this.model)
        }
      })
    }
  }
}
</script>
