<template>
	<div>
		<map style="width: 100%; height:1200rpx;" 
			:latitude="latitude" 
			:longitude="longitude" 
			:markers="covers">
		</map>
		<button @tap='searchCity'>
			搜索
		</button>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude:39.909,
					longitude:116.39742,
					iconPath: '../../static/image/location.png'
				}]
			}
			}
		,
		onShow(){
			this.count=getApp().globalData.count
		},
		onReady(){
			this.getLocation()
		},
		methods: {
			searchCity(){
				uni.chooseLocation({
				success:  (res)=> {
					this.latitude=res.latitude
					this.longitude=res.longitude
					this.covers.push(
						{
							latitude:this.latitude,
							longitude:this.longitude,
							iconPath: '../../static/image/location.png'
						}
					)
				},
				fail:function(){
					console.log(111)
				}
			})
			},
			getLocation(){
				uni.getLocation({
				success:  (res)=> {
					this.latitude=res.latitude
					this.longitude=res.longitude
					this.covers.push(
						{
							latitude:this.latitude,
							longitude:this.longitude,
							iconPath: '../../static/image/location.png'
						}
					)
				},
				fail:function(err){
					console.log(err)
				}
			});
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
