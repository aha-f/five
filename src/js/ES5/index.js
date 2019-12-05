"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//轮播
var Slider =
/*#__PURE__*/
function () {
  function Slider(selector) {
    _classCallCheck(this, Slider);

    //大盒子
    this.bigBox = document.querySelector(selector); //所有大图li

    this.ulli = this.bigBox.children[0].children; //大图数量

    this.num = this.ulli.length; //创建页面中所需要的元素并返回所有的圆点li

    this.olli = document.querySelectorAll('.circle'); //当前下标

    this.indexA = 0; //文字div
    //this.div = this.$('#msg');
    //调用轮播

    this.slide(); //左按钮

    this.ltBtn = this.$('#push_l'); //右按钮

    this.rtBtn = this.$('#push_r'); //添加事件

    this.addEvent(); //计时器

    this.timer = null;
    this.autoPlay();
  }

  _createClass(Slider, [{
    key: "autoPlay",
    value: function autoPlay() {
      var _this = this;

      this.timer = setInterval(function () {
        //当前下标 + 1
        _this.indexA++;

        if (_this.indexA === _this.num) {
          _this.indexA = 0;
        }

        _this.slide();
      }, 2000);

      this.bigBox.onmouseover = function () {
        clearInterval(_this.timer);
      };

      this.bigBox.onmouseout = function () {
        _this.autoPlay();
      };
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      var _this2 = this;

      //左按钮点击事件
      this.ltBtn.onclick = function () {
        //当前下标-1
        _this2.indexA--;

        if (_this2.indexA === -1) {
          _this2.indexA = _this2.num - 1;
        }

        _this2.slide();
      }; //右按钮点击事件


      this.rtBtn.onclick = function () {
        //当前下标 + 1
        _this2.indexA++;

        if (_this2.indexA === _this2.num) {
          _this2.indexA = 0;
        }

        _this2.slide();
      }; //圆点


      var _loop = function _loop(i) {
        _this2.olli[i].onmouseenter = function () {
          _this2.indexA = i;

          _this2.slide();
        };
      };

      for (var i = 0; i < this.num; i++) {
        _loop(i);
      }
    }
  }, {
    key: "slide",
    value: function slide() {
      //所有大图none,所有圆点red
      for (var i = 0; i < this.num; i++) {
        this.ulli[i].style.display = 'none';
        this.olli[i].style.background = 'white';
      } //当前大图block，当前圆点blue


      this.ulli[this.indexA].style.display = 'block';
      this.olli[this.indexA].style.background = 'red';
    }
  }, {
    key: "$create",
    value: function $create(tagName) {
      return document.createElement(tagName);
    }
  }, {
    key: "$",
    value: function $(selector) {
      return document.querySelector(selector);
    }
  }]);

  return Slider;
}(); //小效果
// 热门旗舰店 移入品牌


$('.hotstore_more li').mouseenter(function () {
  // $('.hot_hide a').css('color','#b28247');
  // $('.hot_hide').css('display','block');
  //$(this).find('.hot_hide').css('display','block');
  //线条
  $(this).find('.top').animate({
    'width': '166px'
  }, 400);
  $(this).find('.right').animate({
    'height': '85px'
  }, 400);
  $(this).find('.bottom').animate({
    'width': '166px'
  }, 400);
  $(this).find('.left').animate({
    'height': '85px'
  }, 400);
});
$('.hotstore_more li').mouseleave(function () {
  //$('.hot_hide').css('display','none');
  //线条
  $(this).find('.top').animate({
    'width': '0'
  }, 400);
  $(this).find('.right').animate({
    'height': '0'
  }, 400);
  $(this).find('.bottom').animate({
    'width': '0'
  }, 400);
  $(this).find('.left').animate({
    'height': '0'
  }, 400);
}); // 海外服务-渐变动画

$('.oversealife_list  li ').mouseenter(function () {
  $('.oversealife_list  li i').css('transform', 'skewx(-25deg)');
}); //商场同款左右移动

$('.storesame_link li1').mouseenter(function () {
  $('.storesame_more').stop().animate({
    'left': '0'
  }, 400);
  $('.storesame_link li1').each(function () {
    $(this).css('background-color', '#999');
  });
  $(this).css('background-color', '#000');
});
$('storesame_link li2').mouseenter(function () {
  $('.storesame_more').stop().animate({
    'left': '-1210px'
  }, 400);
  $('.storesame_link li2').each(function () {
    $(this).css('background-color', '#999');
  });
  $(this).css('background-color', '#000');
});
$('storesame_link li3').mouseenter(function () {
  $('.storesame_more').stop().animate({
    'left': '-2420px'
  }, 400);
  $('.storesame_link li3').each(function () {
    $(this).css('background-color', '#999');
  });
  $(this).css('background-color', '#000');
}); //购物中心ul移入移出

$('.storesame_move').mouseenter(function () {
  $(this).find('.storesametxt').stop().animate({
    "left": "-50px"
  }, 300);
  $(this).find('.storesamepic').stop().animate({
    "right": "-50px"
  }, 300);
});
$('.storesame_move').mouseleave(function () {
  $(this).find('.storesametxt').stop().animate({
    "left": "0"
  }, 300);
  $(this).find('.storesamepic').stop().animate({
    "right": "0"
  }, 300);
});