//sessionStorage存储有效期：网页打开到关闭期间有效；关闭网页后无效。
//临时保存数据到session
function saveSessionStorage(id) {
    var target = document.getElementById(id);
    var str = target.value;
    sessionStorage.setItem("mess1",str);
    sessionStorage.setItem("mess2",str+"+"+str);
}

//取出session中的临时数据
function loadSessionStorage(id) {
    var target=document.getElementById(id);
    var msg=sessionStorage.getItem("mess2");
    target.innerText=msg;
}

//localStorage存储有效期：保存在本地磁盘，永永有效。网页关闭重新打开不会消失。
//永久保存数据到磁盘
function saveLocalStorage(id) {
    var target=document.getElementById(id);
    var str=target.value;

    localStorage.setItem("mess3",str);

}

//读取永久保存的数据
function loadLocalStorage(id) {
    var target=document.getElementById(id);
    var msg=localStorage.getItem("mess3");
    target.innerText=msg;
}