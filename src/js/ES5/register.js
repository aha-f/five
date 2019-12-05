"use strict";

/*
    正则
    是否已经被注册
*/
//一、获取
//手机号
var oPhone = $('.phone'); //验证码

var ocode = $('#code'); //密码

var opwd = $('#pwd'); //确认密码

var opwd2 = $('#pwd2'); //注册

var osub = $('.sub-btn');
var arr = [false, false, false]; //二、事件

oPhone.onblur = function () {
  var re = /^1\d{10,}$/;

  if (!re.test(this.value)) {
    alert('电话号不符合规则，请至少输入11个数字');
  } else {
    arr[0] = true;
  }
};

opwd.onblur = function () {
  var re = /^\d+$/;

  if (!re.test(this.value)) {
    alert('密码不符合规则！请输入至少一个数字！');
  } else {
    arr[1] = true;
  }
};

opwd2.onblur = function () {
  if (this.value !== opwd.value) {
    alert('两次密码不一致，请重新输入！');
  } else {
    arr[2] = true;
  }
};

osub.onclick = function () {
  console.log(arr);

  if (arr.indexOf(false) !== -1) {
    alert('信息添写错误！');
    return;
  }

  var uname = oPhone.value;
  var upwd = opwd.value;
  var sure = opwd2.value; //判断是否为空

  if (!uname) {
    alert('用户名不能为空！');
    return;
  }

  if (!upwd) {
    alert('密码不能为空！');
    return;
  }

  if (!sure) {
    alert('确认密码不能为空！');
    return;
  }
  /*
        "registors"
      {
          "用户名" : "密码",
          "用户名" : "密码"
      }
  */
  //获取cookie


  var cookieStr = cookie.get('registors') ? cookie.get('registors') : ''; //转为对象

  var cookieObj = convertCookieStrToCookieObj(cookieStr); //判断对象中是否存在现在注册的用户名

  if (uname in cookieObj) {
    alert('用户名已存在！');
    return;
  }

  cookieObj[uname] = upwd; //重新加入cookie

  cookie.create('registors', JSON.stringify(cookieObj), 7);
  oPhone.value = opwd.value = opwd2.value = '';
  alert('注册成功');
  location.href = 'login.html';
};

function $(selector) {
  return document.querySelector(selector);
}

function convertCookieStrToCookieObj(cookieStr) {
  if (!cookieStr) {
    return {};
  }

  return JSON.parse(cookieStr);
}