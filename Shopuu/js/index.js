$(function(){var i=createXHR();i.open("GET","../js/index.json",!0),i.send(),i.onreadystatechange=function(){function s(){for(var i="",s=0;s<h.length;s++)i+='<div class="swiper-slide"><a href = "javascript:;"><img src='+h[s]+"></a></div>";$("#nav2").find(".swiper-wrapper").html(i);var e=(new Swiper(".scroll2",{pagination:".swiper-pagination",slidesPerView:4,paginationClickable:!0,spaceBetween:f}),a.brands),n=[];for(var t in e){for(var l="",s=0;s<e[t].img.length;s++)l+='<dl><dt><img src="'+e[t].img[s]+'" alt=""></dt><dd><span class="list_p1">'+e[t].name[0]+'</span><p class="list_p2"><del>￥'+e[t].price.one[s]+"</del>￥"+e[t].price.two[s]+'</p><p class="list_p3">首付<span>￥'+e[t].price.three[s]+"</span></p></dd></dl>";n.push(l)}$("#nav2").find(".swiper-slide").click(function(){$(".goods_list").html(n[$(this).index()]),$(".index_main").css("display","none"),$("footer").css("display","none"),$(".goods").css("display","block")})}function e(){for(var i="",s=0;s<T.img.length;s++)i+=0==s?'<div class="thing"><img src="'+T.img[s]+'" alt=""><div class="frt"><span class="iconfont icon-yanjing"></span><span class="num">'+T.num[s]+"</span></div></div>":'<div class="thing"><img src="'+T.img[s]+'" alt=""><div class="frt"><span class="iconfont icon-yanjing"></span><span class="num">'+T.num[s]+"</span></div></div>";$(".thing_main").html(i),$(".thing").click(function(){var i=$(this).index();window.open(C[i],"_parent"),T.num[i]+=1,e()})}if(4==i.readyState&&200==i.status){for(var a=JSON.parse(i.responseText),n=a.nav1,t="",l=0;l<n.img.length;l++)t+='<dl><dt><a href = "javascript:;"><img src='+n.img[l]+"></a></dt><dd>"+n.name[l]+"</dd></dl>";$("#nav1_main").html(t),$("#nav1_main").css("width",1.15*n.img.length+"rem");var o=0,d=0,c=0,r=0,p=0,g=0;$("#nav1").on("touchstart",function(i){var s=i||window.event;o=s.originalEvent.targetTouches[0].pageX,d=s.originalEvent.targetTouches[0].pageY}),$("#nav1").on("touchmove",function(i){var s=i||window.event;c=s.originalEvent.targetTouches[0].pageX,r=s.originalEvent.targetTouches[0].pageY,p=o-c,g=d-r,Math.abs(g)<Math.abs(p/8)&&$("#nav1_main").css("transform","translateX("+(c-o)+"px)")}),$("#nav1").on("touchend",function(){p<0?$("#nav1_main").css("transform","translateX(0px)"):p>$("#nav1_main").width()-$("#nav1").width()&&$("#nav1_main").css("transform","translateX("+($("#nav1").width()-$("#nav1_main").width())+"px)")});var h=a.nav2,f=$("#nav2").width()/640*.02;s();for(var m=a.footer,u="",l=0;l<m.img.length;l++)u+=0==l?"<dl><dt><img src="+m.img1[l]+'></dt><dd class="active">'+m.name[l]+"</dd></dl>":"<dl><dt><img src="+m.img[l]+"></dt><dd>"+m.name[l]+"</dd></dl>";$("footer").html(u),$("footer").find("dl").click(function(){for(var i=$(this).index(),s=0;s<m.img1.length;s++)$("footer").find("img").eq(s).attr("src",m.img[s]);$(this).find("img").attr("src",m.img1[i]),$("footer").find("dd").removeClass("active"),$(this).find("dd").addClass("active")}),$("footer").find("dl").eq(0).click(function(){window.open("index.html","_parent")}),$("footer").find("dl").eq(1).click(function(){window.open("thing.html","_parent")}),$("footer").find("dl").eq(2).click(function(){window.open("sale.html","_parent")}),$("footer").find("dl").eq(3).click(function(){window.open("message.html","_parent")}),$("footer").find("dl").eq(4).click(function(){window.open("my.html","_parent")}),$(".change").find("li").click(function(){$(".change").find("li").removeClass("li_active"),$(this).addClass("li_active"),1==$(this).index()?($(".sale_main").css("display","none"),$(".brand").css("display","block")):($(".sale_main").css("display","block"),$(".brand").css("display","none"))}),$(".go").click(function(){$(".login").css("display","block"),$("footer").css("display","none")}),$(".icon-cha").click(function(){$(".login").css("display","none"),$("footer").css("display","flex")}),$(".mess").find("li").click(function(){$(".mess").find("li").removeClass("active"),$(this).addClass("active")});var v=$(".scroll1").height()-$("header").height();document.addEventListener("touchmove",function(){v>=getScrollTop()?($("header").css("background","rgba(255,255,255,"+getScrollTop()/213+")"),$("header").find("input").css("background","#fff url(../img/放大镜.png) no-repeat 0.17rem center").css("background-size","0.21rem 0.21rem")):($("header").css("background","rgba(255,255,255,1)"),$("header").find("input").css("background","#eee url(../img/放大镜.png) no-repeat 0.17rem center").css("background-size","0.21rem 0.21rem"))},!1),v<getScrollTop()&&$("header").css("background","rgba(255,255,255,1)"),$(".my_login").click(function(){$(".login").css("display","block"),$("footer").css("display","none")}),$(".my_logo").click(function(){$(".login").css("display","block"),$("footer").css("display","none")});for(var w=a.sale,b="",l=0;l<w.title.length;l++)b+=0==l?'<li><a href="#go_three">'+w.title[l]+"</a></li>":22==l?'<li><a href="#go_zhou">'+w.title[l]+"</a></li>":23==l?'<li><a href="#go_bao">'+w.title[l]+"</a></li>":24==l?'<li><a href="#go_ge">'+w.title[l]+"</a></li>":'<li><a href="#go_'+w.title[l]+'">'+w.title[l]+"</a></li>";$(".index").html(b);var _="",k=[];for(var y in w.name){for(var x="",S=0;S<w.name[y].length;S++)x+="<li><img src="+w.name[y][S]+' alt=""></li>';x="<ul>"+x+"</ul>",k.push(x)}for(var l=0;l<k.length;l++)_+=0==l?'<h3 id="go_three">'+w.title[l]+"</h3>"+k[l]:22==l?'<h3 id="go_zhou">'+w.title[l]+"</h3>"+k[l]:23==l?'<h3 id="go_bao">'+w.title[l]+"</h3>"+k[l]:24==l?'<h3 id="go_ge">'+w.title[l]+"</h3>"+k[l]:'<h3 id="go_'+w.title[l]+'">'+w.title[l]+"</h3>"+k[l];$(".brand_left").append(_);var T=a.thing,C=["http://server.shopuu.com/wap/shop/subdetail?id=8a9947c0593f283f01596d75a92530b2&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c0593f283f0159637f09254a7f&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c0593f283f01594dea554f4042&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c0593f283f01594ddd02403e79&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c0593f283f0159447330d07e20&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c05905b58e015939098f097312&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c05905b58e015920d906974f64&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c05905b58e01591aee8a006ac2&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c058f920cd0158fca3c1fd67d0&from=singlemessage&isappinstalled=1","http://server.shopuu.com/wap/shop/subdetail?id=8a9947c058bfddbc0158d3720c6c3e74&from=singlemessage&isappinstalled=1"];e();var E=a.list,j=[];for(var y in E){for(var q="",l=0;l<E[y].img.length;l++)q+='<dl><dt><img src="'+E[y].img[l]+'" alt=""></dt><dd><span class="list_p1">'+E[y].name[l]+'</span><p class="list_p2"><del>￥'+E[y].price.one[l]+"</del>￥"+E[y].price.two[l]+'</p><p class="list_p3">首付<span>￥'+E[y].price.three[l]+"</span></p></dd></dl>";j.push(q)}$("#nav1_main").find("dl").click(function(){1!=$(this).index()&&(0==$(this).index()?$(".goods_list").html(j[$(this).index()]):$(".goods_list").html(j[$(this).index()-1]),$(".index_main").css("display","none"),$("footer").css("display","none"),$(".goods").css("display","block"))}),$(".goods_top").find(".icon-icon07").click(function(){$(".index_main").css("display","block"),$("footer").css("display","flex"),$(".goods").css("display","none"),$(".sale_top").css("display","block"),$(".change").css("display","block"),$(".sale_main").css("display","block")}),$(".sale_list").find("li").click(function(){$(".goods_list").html(j[$(this).index()+1]),$(".sale_top").css("display","none"),$(".change").css("display","none"),$(".sale_main").css("display","none"),$("footer").css("display","none"),$(".goods").css("display","block")});var E=(new Swiper(".scroll1",{loop:!0,pagination:".swiper-pagination",autoplay:5e3,paginationElement:"li"}),new Swiper(".scroll3",{scrollbar:".swiper-scrollbar",scrollbarHide:!1}),new Swiper(".list1",{pagination:".swiper-pagination",slidesPerView:3,paginationClickable:!0,spaceBetween:f}))}}});