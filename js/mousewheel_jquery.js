$.fn.extend({
		mouseWheel:function(upFun,downFun){
			this.each(function(index,obj){
				if(obj.attachEvent){
				   	obj.attachEvent("onmousewheel",scrollFn);
				}else if(obj.addEventListener){
				    obj.addEventListener("mousewheel",scrollFn,false);
				    obj.addEventListener("DOMMouseScroll",scrollFn,false);
				}
				function scrollFn(e){
				    var ev = e||window.event;
				    var num= ev.wheelDelta || ev.detail;
				    if(num == 120 || num == -3){
				      	if(upFun){
				        	upFun.call(obj);
				     	}
				    }else if(num == -120 || num == 3){
				      	if(downFun){
				        	downFun.call(obj);
				      	}
				    }
				    if(e.preventDefault){
				      	e.preventDefault();
				    }else{
				      	e.returnValue = false;
				    }
				  }	
			})
			
		}
	})