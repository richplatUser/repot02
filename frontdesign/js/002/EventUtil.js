
//通用事件绑定、解绑程序
var EventUtil={
	//检测绑定事件
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type]=handler;
		}
	},
	//通过removeHandler
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	},

	//返回event对象的引用
	getEvent:function(event){
		return event?event:window.event;
	},

	//获取事件目标对象
	getTarget:function(event){
		return event.target||event.srcElement;
	},

	//取消默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},

	//取消冒泡（当前事件触发后，其它父级元素的事件不再继续触发执行）
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}

};
