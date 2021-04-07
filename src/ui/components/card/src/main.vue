<template>
    <view class='m-card'>
        <view class='m-card__header' v-if='$slots.header'><slot name='header'></slot></view>
        <view class='m-card__body'><slot name='default'></slot></view>
        <view class='m-card__footer' v-if='$slots.footer'><slot name='footer'></slot></view>
    </view>
</template>
<script>
export default {
  name: 'mCard'
}
</script>