$(function(){    
    var categoryid =GetQueryString("categoryId");
    $.ajax({
       
        type:"get",
        url:"http://157.122.54.189:9090/api/getproductlist",
        data:{"categoryid":categoryid,"pageid":1},
        success:function(data){
            console.log(data);
            var html =template("productList",data);
            $(".product").html(html);
            $.ajax({
                type:"get",
                url:"http://157.122.54.189:9090/api/getcategorybyid",
                data:{"categoryid":categoryid},
                success:function(data){
                    console.log(data);
                    var html =template("name",data);
                    $(".productTitle").html(html);
                }
            })
            //点击下一页
            var page1=1;
            var page =Math.ceil(data.totalCount/10);
            console.log(page);
            
            $(".product_page .next").click(function(){
                
                page1+=1;
                if(page1>page){
                    page1=page;
                }
                getPage(page1);
            })
            //点击上一页
            $(".product_page .pre").click(function(){
                page1-=1;
                if(page1<1){
                    page1=1;
                }
                getPage(page1);
            })
            //点击中间选页按钮
            $(".dropdown-menu li a").click(function(){
                page1 =$(this).attr("value"); 
                 console.log(page1);
                //  发送请求
                getPage(page1);
                
            })
        }
    
    //三级菜单分类名
    
});
    function getPage(page1){
        $.ajax({
            
             type:"get",
             url:"http://157.122.54.189:9090/api/getproductlist",
             data:{"categoryid":categoryid,"pageid":page1},
             success:function(data){
                 var html =template("productList",data);
                 $(".product").html(html);
             }
         })
    }
})
//获取URL参数
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
    