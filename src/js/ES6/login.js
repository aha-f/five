
/*
    正则
    是否已经被注册
*/
//一、获取
//手机号
let oPhone = $('#username');

//密码
let opwd = $('.pwd');
//登录按钮
let oSub = $('#loginsubmit');

//二、事件
oPhone.onblur = function(){
    let re = /^1\d{10,}$/;
    if(!re.test(this.value)){
        alert('电话号不符合规则，请至少输入11个数字');
    }
    
}
opwd.onblur = function(){
    let re = /^\d+$/;
    if(!re.test(this.value)){
        alert('密码不符合规则！请输入至少一个数字！');
    }
}
oSub.onclick = function () {
    let uname = oPhone.value;
    
    let upwd = opwd.value;
    
    if(!uname){
        alert('用户名不能为空！');
        return;
    }
    if(!upwd){
        alert('密码不能为空！');
        return;
    }
    let cookieStr = cookie.get('registors') ? cookie.get('registors') : '';
    
    let cookieObj = convertCookieStrToCookieObj(cookieStr);
   
 
    if(uname in cookieObj){
        if(cookieObj[uname] === upwd){
            //免登录--cookie
            /*
                key : login
                value : 'uname'
            */
            cookie.create('login',uname,3);
            alert('登录成功！');
            window.location = 'product.html';
            // $(window).attr('lotion','product.html')
            return;
        }else{
            alert('密码不正确!');
        }
        
    }else{
        alert('用户名不存在！');
        return;
    }
}
function $(selector){
    return document.querySelector(selector);
}
function convertCookieStrToCookieObj(cookieStr){
    if(!cookieStr){
        return {};
    }
    return JSON.parse(cookieStr);
}