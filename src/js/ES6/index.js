//轮播
class Slider{
    constructor(selector){
        //大盒子
        this.bigBox = document.querySelector(selector);
        //所有大图li
        this.ulli = this.bigBox.children[0].children;
        console.log(this.ulli);
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