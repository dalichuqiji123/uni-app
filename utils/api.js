let urlBase = "http://localhost:8080/api/v1"
function good(url,data,method,callback){
    return uni.request({
        url:urlBase+url,
        data,
        method,
        success:function(res){
            if(res.data.err==0){
                callback(res.data.data)
            }
        }
    })
}
//获取商品列表
export function fetchgetgood(data,callback){
    good('/goods/getgoodslist',data,"POST",callback)
}
//获取商品详情
export function fetchgetDetial(data,callback){
    good('/goods/getgooddetail',data,"GET",callback)
}
//获取轮播图
export function fetchGetads(data,callback){
    good('/jd/ads/all',data,"GET",callback)
}