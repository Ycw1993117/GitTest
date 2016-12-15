//乘法表
function plus(num){
	for(var i=1;i<=num;i++){
		for(var j=1;j<=i;j++){
			document.write(i+"X"+j+"="+i*j+" ")
		}
		document.write("<br/>")
	}
}

//获得函数的参数和
function add(){
	var sum=0;
	if(arguments.length>0){
		for(var i=0;i<arguments.length;i++){
			sum+=arguments[i];
		}
	}
	return sum;
}

//数组的遍历
function arrLook(arr){
	for(var i in arr){
		document.write(arr[i]+" ");
	}
}

//数组的排序 从大到小
function arrOrderMax(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length-i-1;j++){
			if(arr[j]<arr[j+1]){
				var temp=0;
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	document.write(arr);
}

//数组的排序 从小到大
function arrOrderMin(value1,value2){
	if(value1>value2){
		return 1;
	}else if(value1<value2){
		return -1;
	}else{
		return 0;
	}
}

//字符串的遍历
function strLook(str){
	for(var i=0;i<str.length;i++){
		document.write(str[i]+" ");
	}
}


//获得某范围内的随机数
function getRandom(start,end){
	var d=end-start+1;
	return Math.floor(Math.random()*d+start);
}




//设置时间
function setTime(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minu = date.getMinutes();
	var sec = date.getSeconds();
	return "现在是："+year+"年"+month+"月"+day+"日"+" "+hour+":"+minu+":"+sec;
}


//浏览器距离屏幕的左边距离
function screenRangeLeft(){
	if(typeof window.screenLeft=="number"){
		return window.screenLeft;
	}else{
		return window.screenX;
	}
}


//浏览器距离屏幕的顶部距离
function screenRangeTop(){
	if(typeof window .screenTop=="number"){
		return window.screenTop;
	}else{
		return screenY;
	}
}


//获得外部style
function getStyle(element,style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}


//获得随机颜色
function getRandomColor(){
	var R=Math.round(Math.random()*255).toString(16);
	var G=Math.round(Math.random()*255).toString(16);
	var B=Math.round(Math.random()*255).toString(16);
	return "#"+(R.length<2?"0"+R:R)+(G.length<2?"0"+G:G)+(B.length<2?"0"+B:B);
}



//去掉空格
function filterWhiteSpace(node){
	var result=[];
	for(var i=0;i<node.length;i++){
		if(node[i].nodeType==3&&/^\s+$/.test(node[i].nodeValue)){
			continue;
		}else{
			result.push(node[i]);
		}
	}
	return result;
}




//获得按键的ASCII码
function getKeyCode(evt){
	var e=evt||window.event;
	return evt.keyCode||evt.charCode;
}


//窗口不可见边界和可见边界之间的距离

function getScrollLeft(){
	return document.documentElement.scrollLeft||document.body.scrollLeft;
}


function getScrollTop(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}


//冒泡事件的阻断
function stopBubble(evt){
	var e=evt||window.event;
	if(window.event){
		return e.cancelBubble=true;
	}else{
		return e.stopBubble();
	}
}


//获得点击对象
function getTarget(evt){
	var e=evt||window.event;
	return e.target||evt.srcElement;
}


//阻止默认行为
function stopEvent(evt){
	var e=evt||window.event;
	if(window.event){
		return e.returnValue=false;
	}else{
		return preventRefault();
	}
}


//设置cookie
function setCookie(name,value,expires,domain,path,secure){
	var cookieContent=encodeURIComponent(name)+"="+encodeURIComponent(value);
	if(expires instanceof Date){
		cookieContent+=";expires="+expires;
	}
	if(domain){
		cookieContent+=";domain="+domain;
	}
	if(path){
		cookieContent+=";path="+path;
	}
	if(secure){
		cookieContent+=";secure="+secure;
	}
	document.cookie=cookieContent;
}


//获得cookie的值
function getCookie(name){
	var cookieName=decodeURIComponent(name)+"=";
	var cookieStart=document.cookie.indexOf(name);
	if(cookieStart>-1){
		var cookieEnd=document.cookie.indexOf(";",cookieStart);
		if(cookieEnd==-1){
			var cookieEnd=document.cookie.length;
		}
	}
	var cookieValue=document.cookie.substring(cookieStart+cookieName.length,cookieEnd);
	return cookieValue;
}


//设置cookie时间
function setCookieDate(day){
	var date=null;
	if(typeof day=="number"&&day>0){
		date=new Date();
		date.setDate(date.getDate()+day);
	}
	return date;
}


//获得AJAX对象
function createXHR(){
	var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}





