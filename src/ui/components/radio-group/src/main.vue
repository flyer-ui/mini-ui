<template>
   <div class='m-radio-group'>
     <slot></slot>
   </div>
</template>
<script>
export default {
  name: 'mRadioGroup',
  props: {
    value: [String, Boolean, Number]
  }
}
</script>
