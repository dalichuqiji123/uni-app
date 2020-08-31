<template>
	<view class="home">
		<view v-text='count' class="count"></view>
		<button type="primary" @tap='countChange("add")'>+</button>
		<button type="warn" @tap='countChange("sub")'>-</button>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count:0
			}
		},
		onShow(){
			this.count=getApp().globalData.count
		},
		methods: {
			countChange(arg){
				if(arg=='add'){
					getApp().globalData.count++
				}else{
					getApp().globalData.count--
				}
				this.count=getApp().globalData.count
			}
		}
	}
</script>

<style>
	.count{
		text-align: center;
		font-size: 100rpx;
	}
</style>
