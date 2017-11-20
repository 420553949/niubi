// var search=location.search;
$(function(){
    //获取ID
    var productId=GetQueryString("productId");
    $.ajax({
        type:"get",
        url:"http://157.122.54.189:9090/api/getproduct",
        data:{"productid":productId},
        success:function(data){
            // console.log(data);
            var html =template("Info",data);
            $(".productInfo").html(html);
          
        }
    });
    $.ajax({
        type:"get",
        url:"http://157.122.54.189:9090/api/getproduct",
        data:{"productid":productId},
        success:function(data){
            // console.log(data);
            var html =template("price",data);
            $(".plist").html(html);
          
        }
    });

    $.ajax({
        type:"get",
        url:"http://157.122.54.189:9090/api/getproductcom",
        data:{"productid":productId},
        success:function(data){
            var html =template("comment",data);
            $(".product_Comment").html(html);
        }
    })
    
});

//获取URL参数
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}