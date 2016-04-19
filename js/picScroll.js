;(function($){
    var Move= function(conobj,ulobj,liobj,setting){
    	this.self=conobj;      //获得容器
    	this.ulCon=ulobj;
    	this.picCon=liobj;  //获得图片容器
    	this.picLen=this.picCon.length;   //获得图片的数量
    	this.DefaultSetting={
                                    "overflow":"hidden",
                                    "float":"left",
                                    "marginLeft":"auto",
                                    "marginRight":"auto"
    	                        };
    	this.setting = setting;
		this.setSettingValue();           //设置值
     }
     Move.prototype={
     	//设置值
     	setSettingValue:function(){      
            this.self.css({
            	                        //设置
										width:this.setting.width,
										height:this.setting.height,
										//默认
										overflow:this.DefaultSetting.overflow,
										marginLeft:this.DefaultSetting.marginLeft,
										marginRight:this.DefaultSetting.marginRight
									});
            this.ulCon.css({
                                        width:this.setting.picwidth*this.picLen   //ul的宽度设置为图片的宽度乘以图片的数量
                                    });
            this.picCon.css({
										width:this.setting.picwidth,
										height:this.setting.picheight,
										//默认
										overflow:this.DefaultSetting.overflow,
										float:this.DefaultSetting.float
									});
     	},
     	//自动切换  参数time:切换时差
     	autoMove:function(time){
    	var i=1;
    	var obj=this.self;
    	var len=this.picLen;
    	var picWidth=this.setting.picwidth;
        setTimeout(changePic,time);
        function changePic(){
    	if(i==len-1){
    		 obj.animate({scrollLeft:picWidth*i},500).animate({scrollLeft:0},0);
    	}
    	else{
    		obj.animate({scrollLeft:picWidth*i},500);
           }
           if(i!=len-1){
               i++;
           }
           else{
           	i=1;
           }
            setTimeout(changePic,time);
     	  }
     	}
     }
window["Move"]=Move;
})(jQuery)