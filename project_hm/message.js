
  // alert(111)
$(function(){
    var message_center=document.getElementById("message_center");
            var message_img=message_center.getElementsByTagName("img")[0];
            var m_num=0;
            message_center.onclick=function(evt){
                m_num++
                var e=evt||window.event;
                var offsetx=e.offsetX;
                var offsety=e.offsetY;
                var width=this.offsetLeft;
                var height=this.offsetTop;
                // alert(width)
                if(m_num%2==0){
                    message_img.style.width=this.offsetWidth+"px";
                    message_img.style.height=this.offsetHeight+"px";
                    message_img.style.left=0;
                    message_img.style.top=0;
                    this.onmousemove=null;
                }else{
                    message_img.style.width=message_img.offsetWidth*3+"px";
                    message_img.style.height=message_img.offsetHeight*3+"px";
                    message_img.style.left= -offsetx*2+"px";
                    message_img.style.top= -offsety*2+"px";
                    this.onmousemove=function(evt){
                        var e=evt||window.event;
                        var clientx=e.clientX;
                        var clienty=e.clientY;
                        var distanceX=clientx-width-offsetx+getScrollLeft();
                        var distanceY=clienty-height-offsety+getScrollTop();
                        // console.log(distanceX+"......"+distanceY);
                        // console.log(offsetx+"......"+offsety);
                        message_img.style.left= -offsetx*2-distanceX+"px";
                        message_img.style.top= -offsety*2-distanceY+"px";
                    }
                }
            }
})