//轮播
class Slider{
    constructor(selector){
        //大盒子
        this.bigBox = document.querySelector(selector);
        //所有大图li
        this.ulli = this.bigBox.children[0].children;
       
        //大图数量
        this.num = this.ulli.length;
        //创建页面中所需要的元素并返回所有的圆点li
        this.olli = document.querySelectorAll('.circle');
        //当前下标
        this.indexA = 0;
        //文字div
        //this.div = this.$('#msg');
        //调用轮播
        this.slide();
        //左按钮
        this.ltBtn = this.$('#push_l');
        //右按钮
        this.rtBtn = this.$('#push_r');
        //添加事件
        this.addEvent();
        //计时器
        this.timer = null;
        this.autoPlay();
        
    }
    autoPlay(){
        this.timer = setInterval(() => {
            //当前下标 + 1
            this.indexA ++;
            if(this.indexA === this.num){
                this.indexA = 0;
            }
            this.slide();
        }, 2000);
        this.bigBox.onmouseover = ()=>{
            clearInterval(this.timer);
        }
        this.bigBox.onmouseout = ()=>{
            this.autoPlay();
        }
    }
    addEvent(){

        //左按钮点击事件
        this.ltBtn.onclick = ()=>{
            //当前下标-1
            this.indexA --;
            if(this.indexA === -1){
                this.indexA = this.num - 1;
            }
            this.slide();
        }
        //右按钮点击事件
        this.rtBtn.onclick = ()=>{
            //当前下标 + 1
            this.indexA ++;
            if(this.indexA === this.num){
                this.indexA = 0;
            }
            this.slide();
        }
        //圆点
        for(let i = 0;i < this.num;i ++){
            this.olli[i].onmouseenter = ()=>{
                this.indexA = i;
                this.slide();
            }
        }
    }
    slide(){
        //所有大图none,所有圆点red
        for(let i = 0;i < this.num;i ++){
            this.ulli[i].style.display = 'none';
            this.olli[i].style.background = 'white';
        }
        //当前大图block，当前圆点blue
        this.ulli[this.indexA].style.display = 'block';
        this.olli[this.indexA].style.background = 'red';
       
    }

    $create(tagName){
        return document.createElement(tagName);
    }
    $(selector){
        return document.querySelector(selector);
    }
}
//小效果
  // 热门旗舰店 移入品牌
  $('.hotstore_more li').mouseenter(function(){
    // $('.hot_hide a').css('color','#b28247');
    // $('.hot_hide').css('display','block');
    //$(this).find('.hot_hide').css('display','block');
    //线条
  
    $(this).find('.top').animate({
        'width': '166px',
    }, 400);
    $(this).find('.right').animate({
        'height': '85px',
    }, 400);
    $(this).find('.bottom').animate({
        'width': '166px',
    }, 400);
    $(this).find('.left').animate({
        'height': '85px',
    }, 400);

})
$('.hotstore_more li').mouseleave(function(){
    //$('.hot_hide').css('display','none');
    //线条
    $(this).find('.top').animate({
        'width': '0',
    }, 400);
    $(this).find('.right').animate({
        'height': '0',
    }, 400);
    $(this).find('.bottom').animate({
        'width': '0',
    }, 400);
    $(this).find('.left').animate({
        'height': '0',
    }, 400);
})


 // 海外服务-渐变动画
 $('.oversealife_list  li ').mouseenter(function(){
    $('.oversealife_list  li i').css('transform','skewx(-25deg)')
})


 //商场同款左右移动
 $('.storesame_link li1').mouseenter(function(){
    $('.storesame_more').stop().animate({
        'left' : '0'
    },400);
    $('.storesame_link li1').each(function() {
        $(this).css('background-color', '#999');
    });
    $(this).css('background-color', '#000');
})

$('storesame_link li2').mouseenter(function(){
    $('.storesame_more').stop().animate({
        'left' : '-1210px'
    },400);
    $('.storesame_link li2').each(function() {
        $(this).css('background-color', '#999');
    });
    $(this).css('background-color', '#000');
})
$('storesame_link li3').mouseenter(function(){
    $('.storesame_more').stop().animate({
        'left' : '-2420px'
    },400);
    $('.storesame_link li3').each(function() {
        $(this).css('background-color', '#999');
    });
    $(this).css('background-color', '#000');
})
//购物中心ul移入移出
$('.storesame_move').mouseenter(function(){
    $(this).find('.storesametxt').stop().animate({
        "left" : "-50px",
    },300)
    $(this).find('.storesamepic').stop().animate({
        "right" : "-50px",
    },300)
})
$('.storesame_move').mouseleave(function(){
    $(this).find('.storesametxt').stop().animate({
        "left" : "0",
    },300)
    $(this).find('.storesamepic').stop().animate({
        "right" : "0",
    },300)
})