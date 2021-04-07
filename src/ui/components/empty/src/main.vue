<template>
    <view class='m-empty'>
        {{text}}
    </view>
</template>

<script>
export default {
    name:'mEmpty',
    props:{
        text:{
            type:String,
            default:'未找到相关的数据。'
        }
    }
}
</script>