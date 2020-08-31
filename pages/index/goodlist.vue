<template>
    <div class='good-img'>
        <div class="imgbox">
            <img :src="goods.goodsImg" @tap='onClick(goods._id)' />
        </div>
        <span v-text="goods.goodsName"></span>
    </div>
</template>
<script>
export default {
    props:{
        goods:Object,
        required:true
    },
    methods:{
        onClick(id){
            uni.navigateTo({
                url: '/pages/index/detial?id='+id
            });
        }
    }
}
</script>
<style >
.good-img{
    width:370rpx;
    /* float: left; */
    border:1px solid #ccc;
    flex:1;
    text-align: center;
}
.imgbox{
    width:360rpx;
    height:360rpx;
}
.good-img img{
    width:100%;
    height:100%;
}


</style>