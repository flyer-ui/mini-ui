<template>
    <view class="m-tabbar">
        <view class='m-tabbar__item' @click="handleChange(index)" v-for='(item,index) in list' :key='index'>
            <view>
                <image class='m-tabbar__img' :src="getImageUrl(item,index)"></image>
            </view>
            <view>
                {{item.text}}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name:'mTabbar',
    props:{
        list:{
            type:Array,
            default:[]
        },
        value:{
            type:Number,
            default:0
        }
    },
    methods:{
        handleChange(currentIndex){
            this.$emit('change',currentIndex)
        },
        getImageUrl(item,index){
            return this.value === index ? item.activeIconPath:item.iconPath
        }
    }
}
</script>