<template>
	<view class="home">
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" 
					 :indicator-dots="indicatorDots" 
					 :autoplay="autoplay" 
					 :interval="interval" 
					 :duration="duration"
					 circular=true
					 >
                        <swiper-item v-for='item in ads' :key="item._id">
                            <view class='ads-img'>
								<image :src='item.img' />
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
	<view class="box">
		<div v-for="item in list" :key='item._id'>
			<Qfgood :goods="item"></Qfgood>
		</div>
	</view>
	</view>
</template>
<script>
import {fetchgetgood,fetchGetads} from '@/utils/api'
import Qfgood from './goodlist.vue'
	export default {
		components:{
			Qfgood
		},
		data() {
			return {
				count:0,
				list:[],
				ads:[],
				page:1,
				size:6,
				total:0,
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		
		onLoad(){
			this.getlist()
			fetchGetads('',(res)=>{
				this.ads=res.list
			})
		},
		onShow(){
		},
		onPullDownRefresh(){
			this.page=1
			this.size=6
			let data={
				page:this.page,
				size:this.size
			}
			this.list=[]
			fetchgetgood(data,(res)=>{
				this.list=res.list
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom(){
			if(this.list.length<this.total){
				this.page++
				this.getlist()
			}else {
				uni.showToast({
					title: '已经没有数据了',
				});
			}
		},
		methods: {
			countChange(arg){
				if(arg=='add'){
					getApp().globalData.count++
				}else{
					getApp().globalData.count--
				}
				this.count=getApp().globalData.count
			},
			getlist(){
				let data={
					page:this.page,
					size:this.size
				}
				fetchgetgood(data,(res)=>{
					let arr=[...this.list,...res.list]
					this.total=res.total
					this.list=arr
				})
			},
			changeIndicatorDots(e) {
            	this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
	.count{
		text-align: center;
		font-size: 100rpx;
	}
	.box{
		display: flex;
		flex-wrap: wrap;
	}
	.ads-img{
		width:750rpx;
		height:300rpx;
	}
	.ads-img image{
		width:100%;
		height:100%;
	}
</style>
