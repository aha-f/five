//创建cookie
let cookie = {
    create : function(key,value,expires){
        let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ';path=/';
        if(!isNaN(expires)){
            let date = new Date();
            date.setDate(date.getDate() + expires);
            cookieText += ';expires=' + date;
        }
        document.cookie = cookieText;
    },
    get : function(key){
        let str = document.cookie;
        let arr = str.split('; ');
        for(let i = 0,len =  arr.length;i < len;i ++){
            let list = arr[i].split('=');
            if(encodeURIComponent(key) == list[0]){
                return decodeURIComponent(list[1]);
            }
        }
    },
    remove : function(key){
        document.cookie = encodeURIComponent(key) + '=;path=/;expires=' + new Date(0);
    }
}