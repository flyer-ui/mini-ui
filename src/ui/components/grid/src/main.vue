<template>
    <view class='m-grid'>
        <m-row v-for='(row,index) in data' :key='index' class='m-grid__row'>
            <m-col v-for='(column,index) in row' :key='index' class='m-grid__col'>
                <slot v-bind:column='column'></slot>
            </m-col>
        </m-row>
    </view>
</template>

<script>
export default {
    name:'mGrid',
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