(function($) {
	'use strict';

	$(function() {

		init();
		setTimeout(function(){ window.scrollTo(0, 1); }, 100);
	});

})(jQuery);

window['__scrolltop']=true;
window['__resize']='0';
window['__scroll']='0';

var himgs=[
	/*
	{bg:'img/indexbg.jpg',pid:'',did:'',style:''}
	*/
];

function init(){
	km_cmdlist['default']=new km_cl('default');
	/*
	km_cmdlist['default'].cmdA.push({func:function (){
	    km_jc.loadresource(function (){km_cmdlist['default'].doCmdA();});
	}});
	km_cmdlist['default'].cmdA.push({func:function (){
	    km_jc.loadpage(function (){km_cmdlist['default'].doCmdA();});
	}});
	*/
	km_cmdlist['default'].cmdA.push({func:function (){
	    km_jc.init(function (){km_cmdlist['default'].doCmdA();});
	}});
	km_cmdlist['default'].cmdA.push({func:function (){
	    $('#mask').css({display:'none'});
	    km_jc.resize();
		$(window).on('resize',function (){
			if(window['__resize']=='1'){
				return;
			}
			window['__resize']='1';
			km_jc.resize();
			setTimeout(function (){
				window['__resize']='0';
			},50);
		});
		
	    km_jc.scroll();
		$(window).on('scroll',function (){
			km_jc.scroll();

			if($(window).scrollTop()>=125){
				if(window['__scrolltop']){
					window['__scrolltop']=false;
					$('.sh-hline').css({display:'block'});
				}
		    }else{
		    	if(!window['__scrolltop']){
					window['__scrolltop']=true;
					$('.sh-hline').css({display:'none'});
				}
		    }

		});

		$('#d_menu_dropdown').dropdown({justify: '#d_menu'});
		$('#d_tabs').tabs();

		echo.init({
			offset: 100,
			throttle: 250,
			unload: false,
			callback: function (element, op) {
				//console.log(element, 'has been', op + 'ed')
			}
		});

		if(!ltIE9){
			$('.sh-static').sticky({top:0});
		}

		$dropdown=$('#d_menu_dropdown'),
		$('#d_menu_dropdown_open').on('click', function(e) {
	        var data=$dropdown.data('amui.dropdown');
			if(!data.active){
				$('#mask').css({display:'block'});
				$dropdown.dropdown('open');
			}
			return false;
		});
		$dropdown.on('close.dropdown.amui', function (e) {
			$('#mask').css({display:'none'});
		});

		$('#d_video').on('closed.modal.amui',function(){
			var v=document.getElementById('v_video');
			v.pause();
		});
		$('#d_category_win').on('open.modal.amui',function(){

		});

	    km_cmdlist['default']=null;
	    delete km_cmdlist['default'];
	}});
	km_cmdlist['default'].cmdI=0;
	km_cmdlist['default'].doCmdA();
}

var $dropdown;

var km_jc={
	imgw:720,imgh:480,modalpid:''
	,loadresource:function (fn,ha){
		km_jc.fn=(typeof fn=='undefined')?function (){}:fn;
		if(ha){himgs=ha;}
		var imgO=new km_image();
		imgO.himgs=[];
		imgO.func=function (){}
		imgO.after=function (){
			for(var i=0;i<himgs.length;i++){
				himgs[i].size=imgO.size[i];
			}
			setTimeout(function (){
				km_jc.fn();
			},1);
		}
		for(var i=0;i<himgs.length;i++){
			imgO.himgs.push(himgs[i].bg);
		}
		imgO.init();
	}
	,loadpage:function (fn){
		km_jc.fn=(typeof fn=='undefined')?function (){}:fn;
		km_cmdlist['page']=new km_cl('page');
		for(var i in pagelist){
			(function (){
				var _i=i;
				km_cmdlist['page'].cmdA.push({func:function (){
					km_jc.loadpagedata(_i);
				}});
			})();
		}
		km_cmdlist['page'].cmdA.push({func:function (){
			km_cmdlist['page']=null;
			delete km_cmdlist['page'];
			setTimeout(function (){
				km_jc.fn();
			},1);
		}});
		km_cmdlist['page'].cmdI=0;
		km_cmdlist['page'].doCmdA();
	}
	,loadpagedata:function (pid){
		var htm=pagelist[pid]['htm'];
		var pt=pagelist[pid]['pt'];
		if(htm.indexOf('.htm')==-1&&htm.indexOf('/')==-1){
			htm='html/'+htm+'.htm';
		}
	    var posting=$.ajax({
	        type:'get'
	        ,url:htm
	        ,cache:false
	    });
	    posting.done(function(data){
	    	if(pt=='page'){
		    	$('#'+pid+' .content').append(data);
	    	}else if(pt=='box'){
		    	$('#'+pid+' .content').append(data);
	    	}
	        km_cmdlist['page'].doCmdA();
	    });
	    posting.fail(function(data){
	    	alert(data);
	    });
	}
	,init:function (fn){
		for(var i=0;i<himgs.length;i++){
			if(himgs[i].pid!='' && himgs[i].did!=''){
				$('#'+himgs[i].did+' img').attr('src',himgs[i].bg);
			}else if(himgs[i].pid!='' && himgs[i].did==''){
				if($('#'+himgs[i].pid+' .bg img').size()>0){
					$('#'+himgs[i].pid+' .bg img').attr('src',himgs[i].bg);
				}else{
					$('#'+himgs[i].pid+' .bg').css({
						'background-image':'url(img/'+himgs[i].bg+')'
					});
				}
			}
		}
		km_jc.resize();
		fn();
	}
	,resize:function (){
		var w=$(document.body).width();
		var h=$(window).height();
		if(w>620){w=620;}

		$('.sh-detail-info .sh-bottom').css({'position':'absolute','bottom':'0px'});

		var h=$('.sh-detail-info .cover').height();
		$('.sh-detail-info .sh-va').css({height:h+'px'});

	}
	,scroll:function (){
		if(window['__scroll']=='1'){
			return;
		}
		window['__scroll']='1';

		setTimeout(function (){
			window['__scroll']='0';
		},50);
	}
};

function showSubMenu(e,n){
	$('#d_category_left .item').removeClass('active');
	$(e).addClass('active');
	$('.sub').css({'display':'none'});
	$('.sub').eq(n).css({'display':'block'});
	document.getElementById('d_category_right').scrollTop=0;
}

function showVideo(title,url){
	$('#d_videoalt').text(title);
	var w=$(document.body).width();
	if(w>620){w=620;}
	var h=$(window).height();

    var options={width:w-40};
	$('#d_video').modal(options);
	var v=document.getElementById('v_video');
	v.src=url;
	v.play();

	$('.am-dimmer').css({position:'absolute'});
	setTimeout(function (){
		$('.am-dimmer').css({position:'fixed',opacity:'1',display:'block'});
	},10);
}

function showCategory(){
	if(!preventDoubleClick()){return;}
	var w=$(document.body).width();
	if(w>620){w=620;}
	var h=$(window).height();

	$('#d_category_win .am-modal-bd').css({'height':(h-40-60)+'px','overflow':'hidden'});
	$('#d_category_left,#d_category_right').css({'height':(h-40-80)+'px','overflow-y':'auto'});

    var options={width:(w-20),height:(h-40)};
	$('#d_category_win').modal(options);

	$('.am-dimmer').css({position:'absolute'});
	setTimeout(function (){
		$('.am-dimmer').css({position:'fixed',opacity:'1',display:'block'});
	},10);
}

function preventDoubleClick(){
	var d=new Date().getTime();
	if(typeof window['lastclk']!='undefined'){
		if((d-window['lastclk'])<500){
			return false;
		}
	}
	window['lastclk']=d;
	return true;
}
