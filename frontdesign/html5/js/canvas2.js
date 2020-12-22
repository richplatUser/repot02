/**
 * Created by Administrator on 2014/11/22.
 */

//绘制动画
/*
在canvas画布中制作动画相对来说很简单，实际上就是不断变化坐标、擦除、重绘、的过程。

1、使用setInterval 方法设置动画的间隔时间。
  setInterval(code,millisec)
  setInterval方法html中固有方法，这个方法接受两个参数，第一个函数表示执行动画的函数，第二个参数为间隔时间，单位是（毫秒）。

2、用来绘图的函数

  1）、通过不断的变换X和Y的坐标来实现动画效果。
  2）、在该函数中先用clearRect方法将画布整体或者是局部擦除。


擦除图像clearRect方法：
  context.fillRect(x,y,width,height);
   x是指我们起点的横坐标，y是指我们起点的纵坐标，width是指擦子的长度，height是指擦子的高度。
* */

var context;
var width,height;
var i;
function draw04(id){
    var canvas = document.getElementById(id);
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    setInterval(painting,100);
    i = 0;
}
function painting(){
   context.fillStyle = "green";
   context.fillRect(i,i,10,10);
   context.fillRect(400-i,400-i,10,10);
   context.fillRect(400-i,400-i,10,10);
   context.fillRect(0,400-i,10,10);


    // context.fillStyle = "green";
    // context.fillRect(0,0,width,height);
    // context.clearRect(10,10,width,height);
    // context.fillStyle = "green";
    // context.fillRect(i,20,10,10);
    i=i+20;
}