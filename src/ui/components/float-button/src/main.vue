<template>
    <view :class='["m-float-button",`is-${placement}`]'>
        <slot name='default'></slot>
    </view>
</template>

<script>
export default {
    name:'mFloatButton',
    props:{
        placement:{
            type:String,
            default:'bottom-right',
            validateor(value){
                return ['bottom-right','bottom-left','top-left','top-right'].indexOf(value)>-1
            }
        }
    }
}
</script>