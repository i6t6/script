function tologin()
{
    var zm = document.getElementById("i1");
    
    var zm3 = document.querySelector("#username");
    var zm4 = document.querySelector("#password");

    var a3 = zm.value.split(/\u5bc6\u7801\uff1a/)
    var a4 = a3[0].split(/\u8d26\u53f7\uff1a/)
    var a5=a4[1].match(/\d+/)
    //密码
    
    //账号
    zm.value=a5;
    zm3.value=a5;
    console.log("执行命令")
    zm4.value=""+a3[1];
    document.querySelector("#loginbutton").click()
   

}
function tocopy()
{
    var input = document.getElementById("i1");
    // 选中文本
    input.select();
    // 执行浏览器复制命令
    document.execCommand("copy");

}
function tocopy1()
{
    var input = document.getElementById("i2");
    // 选中文本
    input.select();
    // 执行浏览器复制命令
    document.execCommand("copy");

}
