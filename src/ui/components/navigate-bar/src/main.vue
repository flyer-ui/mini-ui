<template>
    <view>
        <view class='m-status-bar'></view>
        <m-row class='m-navigate-bar'>
            <m-col :span='3' class='m-navigate-bar__back' @click.native="handleGoback">
                <slot name='back'>
                    <i class='fly-icon fly-icon-back'></i>
                </slot>
            </m-col>
            <m-col :span='21'>
                <slot name='default'></slot>
            </m-col>
        </m-row>
    </view>
</template>

<script>
export default {
    name:'mNavigateBar',
    props:{
        autoBack:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        handleGoback(){
            if(this.autoBack){
                this.$emit('goBack')
            }else{
                const urlTrack = getCurrentPages()
                uni.navigateBack()
            }
        }
    }
}
</script>