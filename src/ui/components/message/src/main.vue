<template>
    <view class='m-message'>
        <item v-model="options.value" @closed='handleClosed' v-bind="options"></item>
    </view>
</template>

<script>
import Item from './item'
export default {
    name:"mMessage",
    components:{
        Item
    },
    data(){
        return {
            options:{
                value:false,
                content:'',
                icon:'',
                duration:3,
                closable:false,
                type:'info'
            }
        }
    },
    methods:{
        handleClosed(){
            this.options.value = false
        },
        instance(content, type, duration, options){
            this.options.content = content
            this.options.type = type
            this.options.duration = duration
            this.options = Object.assign(this.options,options)
            this.options.value = !this.value
        },
        info(content, duration, options){
            this.instance(content, 'info', duration, options)
        },
        success(content, duration, options){
            this.instance(content, 'success', duration, options)
        },
        warning(content, duration, options){
            this.instance(content, 'warning', duration, options)
        },
        error(content, duration, options){
            this.instance(content, 'error', duration, options)
        },
        loading(content, duration, options){
            this.instance(content, 'loading', duration, options)
        }
    }
}
</script>