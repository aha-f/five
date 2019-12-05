"use strict";

//创建cookie
var cookie = {
  create: function create(key, value, expires) {
    var cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';

    if (!isNaN(expires)) {
      var date = new Date();
      date.setDate(date.getDate() + expires);
      cookieText += ';expires=' + date;
    }

    document.cookie = cookieText;
  },
  get: function get(key) {
    var str = document.cookie;
    var arr = str.split('; ');

    for (var i = 0, len = arr.length; i < len; i++) {
      var list = arr[i].split('=');

      if (encodeURIComponent(key) == list[0]) {
        return decodeURIComponent(list[1]);
      }
    }
  },
  remove: function remove(key) {
    document.cookie = encodeURIComponent(key) + '=;path=/;expires=' + new Date(0);
  }
};