

function saveStorage(id){
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time,data);//时间戳做为key，不会重复
    alert("数据已经被保存！");
    loadStorage('msg');
}

function loadStorage(id){
    var reselt = '<table border="1">';
    for(var i=0;i<localStorage.length;i++)
    {
        var value = localStorage.getItem( localStorage.key(i));//根据第n个key，获取对应保存的文本值
        var date = new Date();
        date.setTime( localStorage.key(i));//获取第n个key，并将key的键名设置为时间的值
        var datestr = date.toGMTString();//将时间转化为字符串（格林尼治时间格式）
        //reselt += '<tr><td>'+'这是第'+i+'条数据</td><td>'+ localStorage.getItem( localStorage.key(i))+'</td><td>'+datestr+'</td></tr>';

        var index=i+1;
        reselt += '<tr><td>'+'这是第'+index+'条数据</td><td>'+ value +'</td><td>'+datestr+'</td></tr>';
    }
    reselt += '</table>';
    var target = document.getElementById(id);
    target.innerHTML = reselt;
}

function clearStorage(id){
    localStorage.clear();
    alert("数据已经被成功删除！");
    loadStorage('msg');
}