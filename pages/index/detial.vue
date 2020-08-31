<template>
    <div class="detial">
        <h1 v-text='detail.goodsName'></h1>
        <image :src='detail.goodsImg' />
        <h3 v-text="detail.goodsDetail"></h3>
    </div>
</template>
<script>
import {fetchgetDetial} from '@/utils/api'
export default {
    data(){
        return {
            detail:{}
        }
    },
    onLoad(arg){
        let data={
            id:arg.id
        }
        let that=this;
        fetchgetDetial(data,function(res){
            that.detail=res.list
        })
    }
}
</script>
<style >
.detial{
    width:100%;
    height:100%;
    text-align: center;
}
.detial image{
    width:100%;
    height:750rpx;
    margin:20px 0px;
}
</style>