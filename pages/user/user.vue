<template>
	<div>
		<view>
		<canvas
		canvas-id="firstCanvas"
		@touchstart='start'
		@touchmove='move'
		@touchend='end'
		id="firstCanvas"></canvas>
	</view>
	<button @tap='drawimg'>点击上传</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count:null
			}
		},
		onShow(){
			this.count=getApp().globalData.count
		},
		methods: {
			start(){
				console.log(111)
			},
			move(){
				
			},
			end(){
				console.log(333)
			},
			// 把rpx单位，转化成px单位，给canvas使用
			rpx2px(arg) {
				let w = uni.getSystemInfoSync().windowWidth
				return w*arg / 750
				},
			drawimg(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res)=>{
						this.count.drawImage(res.tempFilePaths[0], this.rpx2px(225), this.rpx2px(275), this.rpx2px(300), this.rpx2px(200))
          				this.count.draw()
					}
				});
			}
		},
		onReady: function (e) {
		//创建context上下文
        this.count = uni.createCanvasContext('firstCanvas')
        this.count.setStrokeStyle("#00ff00")//外围颜色
        this.count.setLineWidth(5)
        this.count.rect(0, 0, 200, 200)
        this.count.stroke()
        this.count.setStrokeStyle("#ff0000")
        this.count.setLineWidth(2)
        this.count.moveTo(160, 100)
        this.count.arc(100, 100, 60, 0, 2 * Math.PI, true)
        this.count.moveTo(140, 100)
        this.count.arc(100, 100, 40, 0, Math.PI, false)
        this.count.moveTo(85, 80)
        this.count.arc(80, 80, 5, 0, 2 * Math.PI, true)
        this.count.moveTo(125, 80)
        this.count.arc(120, 80, 5, 0, 2 * Math.PI, true)
        this.count.stroke()
        this.count.draw()
    }
	}
</script>
<style>
	#firstCanvas{
		width:750rpx;
		height:750rpx;
	}
</style>
