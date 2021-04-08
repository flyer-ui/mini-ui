<template>
    <scroll-view  class='m-swipe-card' :scroll-x="true">
        <view class='m-swipe-card__list'>
            <m-card  class='m-swipe-card__item' v-for='(val,index) in data' :key='index'>
                <slot v-bind:item='val'></slot>
            </m-card>
        </view>
    </scroll-view>
</template>

<script>
export default {
    name:'mSwipeCard',
    props:{
        data:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>