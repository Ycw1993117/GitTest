$(function(){
	var toast=new Toast();
	var xhr=createXHR();
	var top_left=$("#top_left");
	xhr.open("GET","index.json",true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var responseText=JSON.parse(xhr.responseText);
			var top=responseText.top;

			//top_left
			for(var i = 0;  i <top.top_left.length; i++){
				var a = document.createElement("a");
				a.innerHTML=top.top_left[i];
				a.href="";
				if(i==2){
					a.className="top_a";
				}
				top_left.append(a);
			}
			$("#logo_img").attr("src",top.logo)

			//top_right
			for(var j = 0; j < top.top_right.length; j++){
				var a = document.createElement("a");
				a.innerHTML=top.top_right[j];
				a.href="";
				if(j==0){
					a.className="t_right_a";
				}
				top_right.append(a);
			}

			$("#top_right").find("a").attr("href","javascript:;");

			var top_login = $("#top_right").find("a").eq(1);
			$("#top_right").find("a").eq(1).attr("class","top_login");


			//logo点击跳到主页



			//登录注册页面
			 top_login.on("click",function(){
			 	$("#login").slideToggle("fast");
			 	$("#register").css("display","none");
			 })

			var text=document.getElementById("text");
			var pass=document.getElementById("pass");

			$("#login").find("#text").focus(function() {
				$(this).css("border","1px solid #8bacd5");
			});
			$("#login").find("#text").blur(function() {
				$(this).css("border","1px solid #c7c7c7");
				if(text.value){
					$("#login").find(".must_mail").css("visibility","hidden");
					if(/\@/.test(text.value)){
						$("#text_alert").css("display","none");
					}else{
						$("#text_alert").css("display","block");
						$(".content").eq(0).html("“ "+text.value+" ”")
					}
				}else{
					$("#text_alert").css("display","none");
				}


			});

			$("#login").find("#pass").focus(function() {
				$(this).css("border","1px solid #8bacd5")
			});
			$("#login").find("#pass").blur(function() {
				$(this).css("border","1px solid #c7c7c7")
			});

			//验证格式
			$("#btn").click(function(){
				if(text.value||pass.value){
					if(!text.value){
						$("#login").find(".must_mail").css("visibility","visible");
						$("#login").find("#text").css("border","1px solid #962c42");
					}
					if(!pass.value){
						$("#login").find(".must_pass").css("visibility","visible");
						$("#login").find("#pass").css("border","1px solid #962c42");
					}
					if(text.value&&pass.value){
						if(/^[A-z0-9]\w+\@[A-z0-9]+\.[A-z0-9]+/.test(text.value)&&/^[0-9A-z]\w{5,19}$/.test(pass.value)){
							if(text.value=="qweqwe@qq.com"&&pass.value=="123123qwe"){
								toast.show("登录成功");
								$("#login").css("display","none");
								pass.value="";
							}else{
								toast.show("用户名或密码错误");
							}
						}else{
							toast.show("格式错误");
						}
					}
				}else{
					$("#login").find(".must_pass").css("visibility","visible");
					$("#login").find(".must_mail").css("visibility","visible");
					$("#login").find("#pass").css("border","1px solid #962c42");
					$("#login").find("#text").css("border","1px solid #962c42");

				}


			});

			//注册页面
			$("#with").click(function(){
				$("#register").css("display","block");
				$("#login").css("display","none");
				$("#text_alert").css("display","none");
			})


			$("#mail").focus(function() {
				$(this).css("border","1px solid #8bacd5");
			});
			$("#mail").blur(function() {
				$(this).css("border","1px solid #c7c7c7")
			});

			$("#first_password").focus(function() {
				$(this).css("border","1px solid #8bacd5");
			});
			$("#first_password").blur(function() {
				$(this).css("border","1px solid #c7c7c7")
			});

			$("#second_password").focus(function() {
				$(this).css("border","1px solid #8bacd5");
			});
			$("#second_password").blur(function() {
				$(this).css("border","1px solid #c7c7c7")
			});

			$("#back").click(function(){
				$("#register").css("display","none");
				$("#login").css("display","block");
				$("#pass_alert").css("display","none");
			});

			var with_in=document.getElementById("with_in");

			with_in.onclick=function(){
				if(!/\@/.test($("#mail").val())){
					$("#pass_alert").css("display","block");
					$(".content").eq(1).html($("#mail").val());
					return false;

				}else{
					$("#pass_alert").css("display","none");
				}
				if(!$("#mail").val()){
					$("#register").find(".must_mail").css("visibility","visible");
					$("#register").find("#mail").css("border","1px solid #962c42");
					return false;
				};
				if(!$("#first_password").val()){
					$("#register").find(".must_pass").css("visibility","visible");
					$("#register").find("#first_password").css("border","1px solid #962c42");
					return false;
				}
				if(!$("#second_password").val()){
					$("#register").find(".must_second").css("visibility","visible");
					$("#register").find("#second_password").css("border","1px solid #962c42");
					return false;
				}

				if($("#mail").val()&&$("#first_password").val()&&$("#second_password").val()){
					if($("#first_password").val()!=$("#second_password").val()){
						toast.show("两次密码不一致")
						return false;
					}
					if(/^[A-z0-9]\w+\@[A-z0-9]+\.[A-z0-9]+/.test($("#mail").val())&&/^[0-9A-z]\w{5,19}$/.test($("#first_password").val())&&($("#first_password").val()==$("#second_password").val())){
						toast.show("注册成功");
						$("#register").css("display","none")
						return true;
					}else{
						toast.show("邮箱或密码格式不对");
						return false;
					}

				}else{
					return false;
				}

			};


			//购物车页面
			$("#top_right").find(".t_right_a").hover(function(){
				$("#s_car").show(100);
				$("#login").css("display","none");
				$("#register").css("display","none")
			},function(){
				var timer=setTimeout(function(){
					$("#s_car").css("display","none");
				},200)
				$("#s_car").hover(function(){
					clearTimeout(timer);
				$("#s_car").show();
				},function(){
					$("#s_car").hide(100);
				})
			})

//			$("#top_right").find(".t_right_a").text("111")

			//nav
			for(var k = 0; k < top.nav.length; k++){
				if(k<=5){
					var a = document.createElement("a");
					a.innerHTML=top.nav[k];
					a.href="";
					$("#nav").append(a);
				}else{
					var txt=document.createElement("input");
					txt.type="button";
					txt.className="nav_btn";
					$("#nav").append(txt);
				}

			}

			var nav_txt=document.createElement("input");
			nav_txt.type="text";
			nav_txt.className="nav_txt";
			nav_txt.placeholder="搜索产品"
			$("#nav").append(nav_txt);


			var ps=$("#sub").find("p");
			var sub=responseText.sub;
			for(var i = 0; i < ps.length; i++){
				ps.eq(i).text(sub[i]);
			}
			for(var i = 0; i < 4; i++){
				var a = document.createElement("a");
				a.innerHTML=sub[i+3];
				a.href="";
				$("#sub").append(a);
			}
			$("#nav").find("a:last").css("margin-right",0);

			$("#nav").find(".nav_txt").focus(function() {
				$("#nav").find(".nav_txt").animate({width:155});

			});
			$("#nav").find(".nav_txt").blur(function() {
				$("#nav").find(".nav_txt").animate({width:122});
			});

			//二级导航
			var nav_as=$("#nav").find("a");
			nav_as.hover(function(){
				var id=$(this).index();
				$(".goods_message").eq(id).show(100);
				if($(this).index()==5){
					$(".goods_message").eq(id).css("display","none");
				}
			},function(){
				var id=$(this).index();
				var timer=setTimeout(function(){
					$(".goods_message").eq(id).css("display","none");
				},200)
				$(".goods_message").eq(id).hover(function(){
					clearTimeout(timer);
				$(".goods_message").eq(id).show();
				},function(){
					$(".goods_message").eq(id).hide(100);
				})
			})

			var goods_message=responseText.goods_message;


			//女士栏
			var woman=goods_message.woman;
			var woman_list_1_h5=$(".goods_message").eq(0).find(".list_1").find("h5");
			var woman_list_1_ul=$(".goods_message").eq(0).find(".list_1").find("ul");
			var woman_list_2_h5=$(".goods_message").eq(0).find(".list_2").find("h5");
			var woman_list_2_ul=$(".goods_message").eq(0).find(".list_2").find("ul");
			var woman_list_3_h5=$(".goods_message").eq(0).find(".list_3").find("h5");
			var woman_list_3_ul=$(".goods_message").eq(0).find(".list_3").find("ul");
			var woman_list_4_h5=$(".goods_message").eq(0).find(".list_4").find("h5");
			var woman_list_4_ul=$(".goods_message").eq(0).find(".list_4").find("ul");


			//女士第一栏
			getTitles(woman_list_1_h5,woman.list_1.title);
			getUls(woman_list_1_ul,0,woman.list_1.ul.ul1);
			getUls(woman_list_1_ul,1,woman.list_1.ul.ul2);


			//女士第二栏
			getTitle(woman_list_2_h5,woman.list_2.title);
			getUls(woman_list_2_ul,0,woman.list_2.ul.ul1);
			getUl(woman_list_2_ul,1,woman.list_2.ul.ul2);

			//女士第三栏
			getTitle(woman_list_3_h5,woman.list_3.title);
			getUls(woman_list_3_ul,0,woman.list_3.ul.ul1);

			//女士第四栏
			getTitle(woman_list_4_h5,woman.list_4.title);
			getUls(woman_list_4_ul,0,woman.list_4.ul.ul1);



			//商品详情页导航
			var goods_h5=$("#gmain_left").find('h5');
			var goods_ul=$("#gmain_left").find('ul');
			var arr=[];
			var arr1=[];
			for(var i = 1; i < 5; i++){
				if(typeof woman["list_"+i].title=="string"){
					arr.push(woman["list_"+i].title);
				}else{
					for(var j = 0; j < woman["list_"+i].title.length; j++){

						arr.push(woman["list_"+i].title[j]);
					}
				}

			}

			for(var k = 0; k < woman.list_1.ul.ul2.length; k++){
				arr1.push(woman.list_1.ul.ul2[k]);
			}
			for(var h = 0; h < woman.list_2.ul.ul1.length; h++){
				arr1.push(woman.list_2.ul.ul1[h]);
			}

			getTitles(goods_h5,arr);
			getUls(goods_ul,0,woman.list_1.ul.ul1);
			getUls(goods_ul,1,arr1);
			getUl(goods_ul,2,woman.list_2.ul.ul2);
			getUls(goods_ul,3,woman.list_3.ul.ul1);
			getUls(goods_ul,4,woman.list_4.ul.ul1);


			var goods=responseText.goods;
			var jack=$("#gmain_left").find("ul").eq(1).find("li:first");
			jack.attr("class","jack");
			var html_gmain_left="";
			for(var g = 0; g < goods.gmain_left.length; g++){
				html_gmain_left+='<li><a href="">'+goods.gmain_left[g]+'</a></li>'
			}
			jack.append('<ul>'+html_gmain_left+'</ul>')



			//男士栏
			var man=goods_message.man;
			var man_list_1_h5=$(".goods_message").eq(1).find(".list_1").find("h5");
			var man_list_1_ul=$(".goods_message").eq(1).find(".list_1").find("ul");
			var man_list_2_h5=$(".goods_message").eq(1).find(".list_2").find("h5");
			var man_list_2_ul=$(".goods_message").eq(1).find(".list_2").find("ul");
			var man_list_3_h5=$(".goods_message").eq(1).find(".list_3").find("h5");
			var man_list_3_ul=$(".goods_message").eq(1).find(".list_3").find("ul");
			var man_list_4_h5=$(".goods_message").eq(1).find(".list_4").find("h5");
			var man_list_4_ul=$(".goods_message").eq(1).find(".list_4").find("ul");

			//男士第一栏
			getTitles(man_list_1_h5,man.list_1.title);
			getUls(man_list_1_ul,0,man.list_1.ul.ul1);
			getUls(man_list_1_ul,1,man.list_1.ul.ul2);


			//男士第二栏
			getTitle(man_list_2_h5,man.list_2.title);
			getUls(man_list_2_ul,0,man.list_2.ul.ul1);
			getUl(man_list_2_ul,1,man.list_2.ul.ul2);

			//男士第三栏
			getTitle(man_list_3_h5,man.list_3.title);
			getUls(man_list_3_ul,0,man.list_3.ul.ul1);

			//男士第四栏
			getTitle(man_list_4_h5,man.list_4.title);
			getUls(man_list_4_ul,0,man.list_4.ul.ul1);


			//儿童栏
			var child=goods_message.child;
			var child_list_1_h5=$(".goods_message").eq(2).find(".list_1").find("h5");
			var child_list_1_ul=$(".goods_message").eq(2).find(".list_1").find("ul");
			var child_list_2_h5=$(".goods_message").eq(2).find(".list_2").find("h5");
			var child_list_2_ul=$(".goods_message").eq(2).find(".list_2").find("ul");
			var child_list_3_h5=$(".goods_message").eq(2).find(".list_3").find("h5");
			var child_list_3_ul=$(".goods_message").eq(2).find(".list_3").find("ul");
			var child_list_4_h5=$(".goods_message").eq(2).find(".list_4").find("h5");
			var child_list_4_ul=$(".goods_message").eq(2).find(".list_4").find("ul");

			//儿童第一栏
			getTitles(child_list_1_h5,child.list_1.title);
			getUls(child_list_1_ul,0,child.list_1.ul.ul1);
			getUls(child_list_1_ul,1,child.list_1.ul.ul2);

			//儿童第二栏
			getTitle(child_list_2_h5,child.list_2.title);
			getUls(child_list_2_ul,0,child.list_2.ul.ul1);

			//儿童第三栏
			getTitle(child_list_3_h5,child.list_3.title);
			getUls(child_list_3_ul,0,child.list_3.ul.ul1);

			//儿童第四栏
			getTitle(child_list_4_h5,child.list_4.title);
			getUls(child_list_4_ul,0,child.list_4.ul.ul1);



			//家居栏
			var home=goods_message.home;

			var home_list_1_h5=$(".goods_message").eq(3).find(".list_1").find("h5");
			var home_list_1_ul=$(".goods_message").eq(3).find(".list_1").find("ul");
			var home_list_2_h5=$(".goods_message").eq(3).find(".list_2").find("h5");
			var home_list_2_ul=$(".goods_message").eq(3).find(".list_2").find("ul");
			var home_list_3_h5=$(".goods_message").eq(3).find(".list_3").find("h5");
			var home_list_3_ul=$(".goods_message").eq(3).find(".list_3").find("ul");
			var home_list_4_h5=$(".goods_message").eq(3).find(".list_4").find("h5");
			var home_list_4_ul=$(".goods_message").eq(3).find(".list_4").find("ul");

			//家居第一栏
			getTitles(home_list_1_h5,home.list_1.title);
			getUl(home_list_1_ul,0,home.list_1.ul.ul1);

			getUls(home_list_1_ul,1,home.list_1.ul.ul2);

			//家居第二栏
			getTitle(home_list_2_h5,home.list_2.title);
			getUls(home_list_2_ul,0,home.list_2.ul.ul1);

			//家居第三栏
			getTitle(home_list_3_h5,home.list_3.title);
			getUls(home_list_3_ul,0,home.list_3.ul.ul1);

			//家居第四栏
			getTitle(home_list_4_h5,home.list_4.title);
			getUls(home_list_4_ul,0,home.list_4.ul.ul1);


			//减价栏
			var sale=goods_message.sale;
			var sale_list_1_h5=$(".goods_message").eq(4).find(".list_1").find("h5");
			var sale_list_1_ul=$(".goods_message").eq(4).find(".list_1").find("ul");
			var sale_list_2_h5=$(".goods_message").eq(4).find(".list_2").find("h5");
			var sale_list_2_ul=$(".goods_message").eq(4).find(".list_2").find("ul");
			var sale_list_3_h5=$(".goods_message").eq(4).find(".list_3").find("h5");
			var sale_list_3_ul=$(".goods_message").eq(4).find(".list_3").find("ul");
			var sale_list_4_h5=$(".goods_message").eq(4).find(".list_4").find("h5");
			var sale_list_4_ul=$(".goods_message").eq(4).find(".list_4").find("ul");

			//减价第一栏
			getTitle(sale_list_1_h5,sale.list_1.title);
			getUls(sale_list_1_ul,0,sale.list_1.ul.ul1);


			//减价第二栏
			getTitle(sale_list_2_h5,sale.list_2.title);
			getUls(sale_list_2_ul,0,sale.list_2.ul.ul1);
			getUls(sale_list_2_ul,1,sale.list_2.ul.ul2);


			//减价第三栏
			getTitle(sale_list_3_h5,sale.list_3.title);
			getUls(sale_list_3_ul,0,sale.list_3.ul.ul1);






			function getTitle(tit,json){
				for(var i = 0; i < tit.size();i++){
					tit.eq(i).html(json);
				}
			}

			function getUl(name,num,json){
				var html="";
				html+="<li><a href=''>"+json+"</a></li>";
				name.eq(num).html(html);
			}


			function getTitles(tit,json){
				for(var i = 0; i < tit.size();i++){
					tit.eq(i).html(json[i]);
				}
			}

			function getUls(name,num,json){
				var html="";
				for(var i = 0; i < json.length;i++){
					html+="<li><a href=''>"+json[i]+"</a></li>";
				}
				name.eq(num).html(html);
			}


			//轮播图
			var lis=$("#circle").find("li");
			var pic=responseText.pic;
			var now=0;
			var time=null;

			lis.click(function(){
				lis.attr("class","");
				$(this).attr("class","active");
				$("#pic_ul").animate({top:-520*$(this).index()});
				now=$(this).index();
			});

			$("#pic_ul").find("li").hover(function(){
				clearInterval(time);
			},function(){
				now=$(this).index();
				scroll(lis,now,$("#pic_ul"));
			})


			scroll(lis,now,$("#pic_ul"));

			lis.hover(function(){
				lis.attr("class","");
				$(this).attr("class","active");
				var index=$(this).index();
				$("#pic_ul").animate({top:-520*index});
				clearInterval(time);
			},function(){
				// now=$(this).index();
				scroll(lis,now,$("#pic_ul"));
			});

			function scroll(fn1,now,fn2){
				time=setInterval(function(){
					fn1.attr("class","");
					fn1.eq(now).attr("class","active");
					if(now==fn1.length){
						fn1.eq(0).attr("class","active");
					}
					$(fn2).animate({top:-520*now},function(){
						if(now==fn1.length+1){
							now=1;
							$(fn2).css("top",0);
						}
					});
					now++;

				},2000);
			}




			//list
			var list=responseText.list;
			for(var i = 0; i < list.img.length; i++){
				var dl=document.createElement("dl");
				var dt=document.createElement("dt");
				var img=document.createElement("img");
				var dd=document.createElement("dd");
				img.src=list.img[i];
				dd.innerHTML="<p>"+list.name[i]+"</p>"+"<p class='dd_p'>"+list.price[i]+"</p><a href=''>"+list.type[i]+"</a>";
				dt.append(img);
				dl.append(dt);
				dl.append(dd);
				$("#list").append(dl);
			};
			$("#list").find("dl").wrap('<a href="g_message.html"></a>')


			//main
			var main=responseText.main;
			for(var i = 0; i < main.img.length; i++){
				var a=document.createElement("a");
				a.style.backgroundImage='url('+main.img[i]+')' ;
				a.className="main_a"+i;
				$("#main").append(a);
			}
			var as=$("#main").find("a");
			for(var i = 0; i < as.size(); i++){
				var html='<p>'+main.about[i]+'</p><h2>'+main.type[i]+'</h2><a href="">'+main.buy[i]+'</a>';
				if(i==4||i==10){
					var html='<div class="white"><p>'+main.about[i]+'</p><h2>'+main.type[i]+'</h2><a href="">'+main.buy[i]+'</a></div>';
				}
				as.eq(i).html(html);
			}

			//bottom
			var bottom=responseText.bottom;
			var html="";
				html='<h2>'+bottom.title[0]+'</h2><p>'+bottom.title[1]+'</p><a href="">'+bottom.title[2]+'</a>';
			$("#bottom_top").html(html);

			for(var i = 0; i < bottom.pic.length; i++){
				var dl=document.createElement("dl");
				var dt=document.createElement("dt");
				var img=document.createElement("img");
				var dd=document.createElement("dd");
				img.src=bottom.pic[i];
				if(i==2){
					dl.className="nomargin"
				}
				dd.innerHTML="<p>"+bottom.about[i]+"</p>"+"<p class='dd_p'>"+bottom.name[i]+"</p><a href=''>"+bottom.read+"</a>";
				dt.append(img);
				dl.append(dt);
				dl.append(dd);
				$("#bottom_footer").append(dl);
			}

				//footer
			var footer=responseText.footer;
			for(var i = 0; i < footer.tit.length; i++){
				$(".tit"+(i+1)).html(footer.tit[i]);

			}

			for(var i = 0; i < footer.type.length; i++){
				var li=document.createElement("li");
				li.innerHTML='<a href="">'+footer.type[i]+'</a>'
			$(".ul1").append(li);
			}

			for(var i = 0; i < footer.message.length; i++){
				var li=document.createElement("li");
				li.innerHTML='<a href="">'+footer.message[i]+'</a>'
				$(".ul2").append(li);
			}

			for(var i = 0; i < footer.help.length; i++){
				var li=document.createElement("li");
				li.innerHTML='<a href="">'+footer.help[i]+'</a>'
				$(".ul3").append(li);
			}
			var html='<p>'+footer.connect[0]+'</p><input type="text" /><a href="">'+footer.connect[1]+'</a>';
			$("#footer_4").append(html);

			var html1='<p>'+footer.copyright[0]+'</p><a href="">'+footer.copyright[1]+'</a><a href="" class="police">'+footer.copyright[2]+'</a>';
			$("#f_copyright").html(html1);

			var footer_4=document.getElementById("footer_4");
			var input=footer_4.getElementsByTagName("input")[0];
			input.onfocus=function(){

				this.style.borderColor="#305077";
			}
			input.onblur=function(){
				this.style.borderColor="#808080";
			}


			//top上的p标签的消失与出现
			$("#nav").find("a").hover(function(){
				$("#top_p").hide();
			},function(){
				var timer=setTimeout(function(){
					$("#top_p").css("display","block");
				},200)
				$(".goods_message").hover(function(){
					clearTimeout(timer);
				$("#top_p").hide();
				},function(){
					$("#top_p").show();
				})
			});

			//商品详情页面
			$("#message_left").find("li").click(function() {
				$("#message_left").find("li").attr("class","");
				$(this).attr("class","fade");
				var div_src=$(this).find("img").attr("src")

				$("#message_center").find("img").attr("src",div_src);

			});

			var inform="选择尺码";
			$("#message_right").find("li").wrapInner('<span></span>');
			$("#message_right").find("li").click(function(){
				inform=$(this).html();
				$("#size").find("span").html($(this).html());
				$("#message_right").find("li").attr("class","");
				$(this).attr("class","small");
			});


			$("#message_right").find("li").hover(function(){
				$("#size").find("span").html($(this).html());
			},function(){
				$("#size").find("span").html(inform);
			})


			//商品列表

			var products=responseText.goods.products;
			var model=responseText.goods.model;
			function createGoods_dl(){
				var goods_dl="";
				var products=responseText.goods.products;
				var model=responseText.goods.model;
				for(var i = 0; i < products.img.length; i++){
					goods_dl+='<dl><dt><img src='+products.img[i]+'></dt><dd><p>'+products.name[i]+'</p><p>'+products.price[i]+'</p><button class="add">添加到购物袋</button></dd></dl>'
				};

				return goods_dl;
			}

			function createModel_dl(){
				var model_dl="";
				var products=responseText.goods.products;
				var model=responseText.goods.model;
				for(var j = 0; j < model.length; j++){
					model_dl+='<dl><dt><img src='+model[j]+'></dt><dd><p>'+products.name[j]+'</p><p>'+products.price[j]+'</p><button class="add">添加到购物袋</button></dd></dl>'
				};
				return model_dl;
			}


			$("#gr_bottom").html(createGoods_dl());
			$("#gr_bottom").find("dt").hover(function() {
						// alert(222)
						var index=$(this).parent().index();
						$(this).find("img").attr("src",model[index]);
						// console.log(index)
					}, function() {
						var index=$(this).parent().index();
						$(this).find("img").attr("src",products.img[index]);
						// console.log(index)
					});

			$("#gr_top").find("li").click(function(){
				$("#gr_top").find("li").attr("class","");
				$(this).attr("class","b_bottom")
				if($(this).index()==0){
					$("#gr_bottom").html(createModel_dl());

				}else{
					$("#gr_bottom").html(createGoods_dl());
					// liClick()
				}
				liClick()
			});

			// liClick();


			function liClick(){
				var model_pic=true;

				if($("#gr_top").find("li").eq(1).attr("class")=="b_bottom"){
					$("#gr_bottom").find("dt").hover(function() {
						// alert(222)
						var index=$(this).parent().index();
						$(this).find("img").attr("src",model[index]);
						// console.log(index)
					}, function() {
						var index=$(this).parent().index();
						$(this).find("img").attr("src",products.img[index]);
						// console.log(index)
					});
					model_pic=false;
				}
				if(model_pic){
					// alert(111);
					$("#gr_bottom").find("dt").hover(function() {
						// alert(111)
						var index=$(this).parent().index();
						$(this).find("img").attr("src",products.img[index]);
						console.log(index)
					}, function() {
						var index=$(this).parent().index();
						$(this).find("img").attr("src",model[index]);
						console.log(index)
					});
				}
				addClick();
			}




			//购物车
			var num1=0;
			getGoods();
			var num=0;


			$("#top_right").find(".t_right_a").html("购物袋（"+num1+")");
			addClick();

			function addClick(){

				var goodsArr="";
				$(document).find(".add").click(function(){
					num1=0;
					if($.cookie("goods")!=null){
						goodsArr=eval($.cookie("goods"));

						for(var i = 0; i < goodsArr.length; i++){

							num1+=goodsArr[i].num;


							//购物袋页面的数量加减

							// console.log(goodsArr[i].num)
						}
						// console.log(num1)
						$("#top_right").find(".t_right_a").html("购物袋（"+(num1+1)+")");
					}else{
						$("#top_right").find(".t_right_a").html("购物袋（"+1+")");
					}


				var same=false;
				var id=$(this).parent().parent().index();
				// console.log(id)
				if($.cookie("goods")==null){

					$.cookie("goods",'[{id:'+id+',num:1}]',{expires:12})

				}else{
					var arr=eval($.cookie("goods"));
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id==id){
							arr[i].num+=1;
							var jsonArr=JSON.stringify(arr);
							$.cookie("goods",jsonArr);
							same=true;
						}
					}
					if(!same){
						var obj={id:id,num:1};
						arr.push(obj);
						var cookieArr=JSON.stringify(arr);
						$.cookie("goods",cookieArr);
					}
				}




				// $("#sm_left").find("select").eq(0).find("option").click(function(){

				// 	addClick();
				// 	alert(111)
				// })

				// var options=$("#sm_left").find("select").eq(i).find("option");
				// var obj1={num2:i};
				// options.click(function(){
				// 	goodsArr[obj1.num2].num=$(this).html();
				// 	console.log(goodsArr[obj1.num2].num)
				// })


				getGoods();

				});

				// for(var c = 0; c < goodsArr.length;c++){
				// 	var options=$("#sm_left").find("select").eq(c).find("option");
				// 	var obj1={num2:c};
				// 	options.click(function(){
				// 		goodsArr[obj1.num2].num=$(this).html();
				// 		console.log(goodsArr[obj1.num2].num)
				// 	})
				// }
			}


			$("#top_right").find(".t_right_a").html("购物袋（"+num1+")");

			function getGoods(){
				var g_text="";
				var money=0;
				var shopping_html="";
				if($.cookie("goods")!=null){
					var goodsArr=eval($.cookie("goods"));

					for(var g = 0; g < goodsArr.length; g++){
						var a_id=goodsArr[g].id;
						shopping_html+='<dl><dt><img src='+products.img[a_id]+'></dt><dd><p>'+products.name[a_id]+'</p><p>'+products.price[a_id]+'</p><span>数量：</span><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></dd><a href="javascript:;">删除</a></dl>';
					};
					$("#sm_left").html(shopping_html);



					var sel_id="";

					for(var i = 0; i < goodsArr.length; i++){

						sel_id=goodsArr[i].num;
						// var obj1={num2:i};
						var options=$("#sm_left").find("select").eq(i).find("option");
						options.eq(sel_id-1).attr("selected","selected");

						// options.click(function(){
						// 	goodsArr[obj1.num2].num=$(this).html();
						// 	console.log(goodsArr[obj1.num2].num)
						// })


						var g_id=goodsArr[i].id;
						// console.log(products.img[g_id]);
						g_text+='<dl><dt><img src='+products.img[g_id]+'></dt><dd><p>'+products.name[g_id]+'</p><p>'+products.price[g_id]+'</p><p>数量：'+goodsArr[i].num+'</p></dd></dl>';

						money+=parseFloat(products.price[g_id].substring(1))*goodsArr[i].num;

						num1+=parseFloat(goodsArr[i].num);

						// console.log(money);


					}


					var g_html='<div class="send"><span class="s_left">订单价值：</span><span class="s_right">¥ 0.00</span></div><div class="price"><span class="p_left">标准送货：</span><span class="p_right">¥ 10.00</span></div><div class="all"><span class="a_left">总价：</span><span class="a_right">¥ 0.00</span></div><button class="g_buy">结账</button><button class="g_bag">购物袋</button>';
					g_text+=g_html;
					// alert(g_text);
					$("#s_car").html(g_text);

					// alert(money)
					$("#s_car").find(".s_right").html("￥"+money+".00");
					$("#s_car").find(".a_right").html("￥"+(money+10)+".00")

				}

				$("#sm_left").find("dl").find("a").click(function(){
					num1=0;
					var dl_id=$(this).parent().index();
					$(this).parent().remove();
					var arrCookie=eval($.cookie("goods"));
					arrCookie.splice(dl_id,1);
					var jsonCookie=JSON.stringify(arrCookie);
					$.cookie("goods",jsonCookie);
					getGoods();
					$("#top_right").find(".t_right_a").html("购物袋（"+num1+")");
				});


				$("#s_car").find(".g_bag").click(function(){
					window.open("shopping.html","_parent")
				});

				$("#r_bottom").find(".li1").find("span").html($("#s_car").find(".s_right").html());
				$("#r_bottom").find(".ap_right").html($("#s_car").find(".a_right").html());



			}

			// $("#sm_left").find("select").eq(0).find("option").click(function(){

			// 	addClick();
			// 	alert(111)
			// })


		}
	}
})




