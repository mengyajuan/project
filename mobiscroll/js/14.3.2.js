/*
* @Author: anchen
* @Date:   2016-12-15 16:00:30
* @Last Modified by:   anchen
* @Last Modified time: 2016-12-15 16:48:46
*/

'use strict';
;(function($){
    $.fn.dolg=function(opt){
        var seect=$.extend({},{
            content:"<img src='../images/dl_03.png' />",
            btns:["领取奖励","X"],
            callback:function(){
                alert("领取成功");
            }
        },opt)
        return this.each(function(){
            var mark=$("<div class='mark'></div>"),
                dlog=$("<div class='dolg'><section>"+seect.content+"</section><div class='btns'></div></div>"),
                btns=dlog.find(".btns");
            $(this).prepend(mark,dlog);
            var str="";
            $.each(seect.btns,function(index,val){
                str+="<span>"+val+"</span>";
            })
            btns.html(str);
            btns.on("click","span",function(){
                mark.remove();
                dlog.remove();
                if($(this).index()==0){
                    if(seect.callback) seect.callback();
                }
            })
        })
    }
})(jQuery)