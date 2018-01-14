/*
* @Author: 李亲亲ლ(°◕‵ƹ′◕ლ)
* @Date:   2017-12-29 06:05:40
* @Last Modified by:   李亲亲ლ(°◕‵ƹ′◕ლ)
* @Last Modified time: 2018-01-03 06:26:50
*/
{
	var banners=document.querySelectorAll(".img-box li");
	var pagers=document.querySelectorAll(".circle ul li");
	var box=document.querySelector(".banner");
	var banLeft=document.querySelector(".ban-left");
	var banRight=document.querySelector(".ban-right");
	//选项卡
	pagers.forEach(function(ele,index){
    	ele.onmouseover=function(){
    		for(var i=0;i<banners.length;i++){
    		pagers[i].classList.remove("active");
    		banners[i].classList.remove("active");
    	    };
    	    pagers[index].classList.add("active");
    	    banners[index].classList.add("active");
    	    n=index;
    	};
    });
    //自动轮播
    n=0;
    function bannersFn(bir="r"){
    	if(bir==="r"){
    		n++;
    	}else if(bir="l"){
    		n--;
    	}
    	if(n==banners.length){
    		n=0;
    	}
        if(n===-1){
        	n=banners.length-1;
        }
    	for(var i=0;i<banners.length;i++){
    		pagers[i].classList.remove("active");
    		banners[i].classList.remove("active");
    	    };
    	    pagers[n].classList.add("active");
    	    banners[n].classList.add("active");
    }
    var st=setInterval(bannersFn,5000);
    box.onmouseover=function(){
	clearInterval(st);
     };
    box.onmouseout=function(){
	st=setInterval(bannersFn,5000);
    };
     //解决点击事件的bug
    var flag=true;

    //左右点击事件
   banRight.onclick=function(){
    	if(flag){
    		flag=false;
    		bannersFn();
    	

    	}	

    }
    banLeft.onclick=function(){
    	if(flag){
    		flag=false;
    		bannersFn("l");
    	
    	}
    	
    	

    }
    banners.forEach(function(ele,index){
    	ele.addEventListener("transitionend",function(){
    		flag=true;
    	})

    })
}

{
    var topBar=document.querySelector(".topbar");
    var leftBar=document.querySelector(".cedaohang");
    var btns=document.querySelectorAll(".cdh-ul li");
	var floors=document.querySelectorAll("#nihao");
    var flag=true;
    onscroll=function(){
        if(flag){
        var st=document.documentElement.scrollTop;
        if(st>1100){
            topBar.style.display="block";
        }else{
            topBar.style.display="none";
        }
        if(st>2200){
            leftBar.style.display="block";
        }else{
            leftBar.style.display="none";
        }
        floors.forEach(function(ele,index){
            if(st>=ele.offsetTop){
                for(var i=0;i<btns.length;i++){
                    btns[i].classList.remove("active");
                }
                btns[index].classList.add("active");


            }

        });
        }
    }

    //返回顶部
    var toTop=document.querySelector(".totop");
    console.log(toTop);
    toTop.onclick=function(){
        var st=document.documentElement.scrollTop;
        var speed=st*30/500;
        var t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    }


//楼层跳转

    var btns=document.querySelectorAll(".cdh-ul li");
    var floors=document.querySelectorAll("#nihao");
    btns.forEach(function(ele,index){
        ele.onclick=function(){
            flag=false;
            var ot=floors[index].offsetTop;
            var now=document.documentElement.scrollTop;
            var speed=(ot-now)*30/300;
            var time=0;
            var t=setInterval(function(){
                now+=speed;
                time+=30;
                if(time==300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },30)
        }

    })

    
    
}

//右导航
{
    let logo=document.querySelectorAll(".sn-list-top ul li");
    let logo2=document.querySelectorAll(".sn-list-bot ul li");
    let wz=document.querySelectorAll(".wz2");
    console.log(logo)
    console.log(logo2)
    console.log(wz)

    logo.forEach(function(ele,index){
        ele.onmouseover=function () {
            wz[index].style.display="block";
            wz[index].style.background="#f90";
            wz[index].style.color="#fff";
        }
        ele.onmouseout=function () {
            wz[index].style.display="none";
        }

    })
    logo2.forEach(function(ele,index){
        ele.onmouseover=function () {
            wz[index+4].style.display="block";
            wz[index+4].style.background="#f90";
            wz[index+4].style.color="#fff";
        }
        ele.onmouseout=function () {
            wz[index+4].style.display="none";
        }

    })


}
//测导航内容
{
    let ce=document.querySelectorAll(".aside- li");
    let neirong=document.querySelectorAll(".asd-neirong");
    ce.forEach(function(ele,index){
        ele.onmouseover=function(){
            neirong[index].style.display="block";
        }
        ele.onmouseout=function(){
            neirong[index].style.display="none";
        }
    })
    neirong.onmouseover=function(){
        this.style.display="block";
    }

}