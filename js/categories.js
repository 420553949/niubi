$(function(){
    $.ajax({
        type:"get",
        url:"http://157.122.54.189:9090/api/getcategorytitle",
        success:function(data){
            // console.log(data);
            var html =template("list",data);
            $(".category .lists").html(html);
            //点击
            $(".category .cateList").click(function(){
               var titleId= $(this).data('titleid');
                // console.log($(this).next().siblings('ul'));
                //排他
                $(this).next().slideToggle().siblings('ul').hide();;
                $.ajax({
                    type:"get",
                    url:"http://157.122.54.189:9090/api/getcategory",
                    data:{"titleid":titleId},
                    success:function(data){
                        console.log(data);
                        var html =template("items",data);
                        $(".items").html(html);
                    }
                });
        });
        
       
          
        }
        
    });
   
     
       
       
    
})