/*
* @Author: 李亲亲ლ(°◕‵ƹ′◕ლ)
* @Date:   2017-12-29 06:05:40
* @Last Modified by:   李亲亲ლ(°◕‵ƹ′◕ლ)
* @Last Modified time: 2017-12-29 08:29:45
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