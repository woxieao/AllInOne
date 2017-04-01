

var ltIE9=false;

/*
var imgO=new km_image();
imgO.himgs=[];
imgO.func=function (){}
imgO.after=function (){}
imgO.afterby=function (q){}
imgO.init();
*/

function km_image(){
    var self=this;
    this.imgs=null;
    this.bar_width=0;
    this.size=[];
    this.himgs=[];
    this.himgs_status={};
    this.imgsUnload=[];
    this.after=null;
    this.maxtimeby=20;//每张图片允许的最大加载时间(秒)
    this.it=200;//间隔时间(毫秒)
    this.its=100;//20*1000/200
    this.func=function (n,eo){
        $$("loadingline","style","width:"+Math.floor(parseFloat(n*eo.bar_width/eo.imgs.length))+"px");
        $$("loadingtxt","h","loading... "+Math.round(n*100/eo.imgs.length)+"%");
        /* after
        $$("loadingdef","h","");
        $$("loadingdef","style","display:'none'");
        */
    }
    this.init=function (){
        self.load();
        if(typeof self.after=='function'){
            self.timer=window.setInterval(function (){
                self.show();
            },self.it);
        }
    };
    this.load=function (){
        if(this.himgs.length==0){self.after();return;}
        self.imgs=[];
        self.himgs_status={};
        self.imgsUnload=[];
        for(var i=0;i<this.himgs.length;i++){
            var r=this.imgs.length;
            this.himgs_status[this.himgs[i]]=1;
            this.imgsUnload[r]=1;
            (function (){
                var m=i,q=r;
                self.imgs[q]=new Image();
                self.imgs[q].onload=function (){self.onloadImg(m,q)};
                self.imgs[q].onerror=function (){self.unloadImg(m,q)};
                self.imgs[q].onabort=function (){self.unloadImg(m,q)};
                self.imgs[q].src=self.himgs[m];
            })();
        }
    };
    this.onloadImg=function (m,q){
        self.size[q]={w:self.imgs[q].width,h:self.imgs[q].height};
        self.imgs[q].onload=null;
        self.imgs[q].onerror=null;
        self.imgs[q].onabort=null;
        self.himgs_status[self.himgs[m]]=1;
        self.imgsUnload[q]=1;
        console.log('onloadImg');
    };
    this.unloadImg=function (m,q){
        self.size[q]={w:0,h:0};
        self.imgs[q].onload=null;
        self.imgs[q].onerror=null;
        self.imgs[q].onabort=null;
        self.himgs_status[self.himgs[m]]=0;
        self.imgsUnload[q]=0;
        console.log('unloadImg');
    };
    this.show=function (){
        var imgNum=0;
        for (var j=0;j<self.imgs.length;j++){
            if ((self.imgs[j].complete)||(self.imgsUnload[j]==0)||(self.imgsUnload[j]>self.its)){
                imgNum++;
                console.log('imgNum: '+imgNum);
            }else{
                self.imgsUnload[j]++;
            }
        }
        self.func(imgNum,self);
        if (imgNum<self.imgs.length){return;}
        imgNum=self.imgs.length;
        window.clearInterval(self.timer);
        self.imgs=null;
        self.after();
    }
}
var km_image_util={
    resize:function (w1,h1,w2,h2,type){
        if(type=='corp'){
            //w1,h1 原图尺寸 w2,h2 容器的尺寸 iw,ih 缩放后的图片尺寸
            var iw,ih;
            if(w1/h1>=w2/h2){
                ih=h2;
                iw=(w1*h2)/h1;
                return [iw,ih,(0-(iw-w2)/2),0];
            }else{
                iw=w2;
                ih=(h1*w2)/w1;
                return [iw,ih,0,(0-(ih-h2)/2)];
            }
        }else if(type=='full'){
            var iw,ih;
            if(w1<w2){
                if(h1<h2){
                    return [w1,h1,(w2-w1)/2,(h2-h1)/2];
                }else{
                    return [w1,h1,(w2-w1)/2,0];
                }
            }
            if(w1/h1>=w2/h2){
                iw=w2;
                ih=(h1*w2)/w1;
                return [iw,ih,0,(h2-ih)/2];
            }else{
                ih=h2;
                iw=(w1*h2)/h1;
                return [iw,ih,(w2-iw)/2,0];
            }
        }else if(type=='matchwidth'){
            var iw,ih;
            if(w1<w2){
                if(h1<h2){
                    return [w1,h1,(w2-w1)/2,(h2-h1)/2];
                }else{
                    return [w1,h1,(w2-w1)/2,0];
                }
            }
            iw=w2;
            ih=(h1*w2)/w1;
            return [iw,ih,0,(h2-ih)/2];
        }else{
            var iw,ih;
            if(w1/h1>=w2/h2){
                if(w1<w2){
                    return [w1,h1,(w2-w1)/2,(h2-h1)/2];
                }else{
                    iw=w2;
                    ih=(h1*w2)/w1;
                    return [iw,ih,0,(0-(ih-h2)/2)];
                }
            }else{
                if(h1<h2){
                    return [w1,h1,(w2-w1)/2,(h2-h1)/2];
                }else{
                    ih=h2;
                    iw=(w1*h2)/h1;
                    return [iw,ih,(0-(iw-w2)/2),0];
                }
            }
        }
    }
};
function km_cl(idx){
    var self=this;
    this.idx=idx;
    this.errorhandle=null;
    this.cmdA=[];
    this.cmdI=-1;
    this.doCmdA=function (){
        if(this.cmdI==-1){return 0;}
        if(this.cmdI==this.cmdA.length){this.cmdA=[];this.cmdI=-1;return 1;}
        var _n=this.cmdI;
        this.cmdI++;
        try{
            if(typeof this.cmdA[_n].func=="function"){
                var _para=(typeof this.cmdA[_n].para=="undefined")?'':this.cmdA[_n].para;
                this.cmdA[_n].func(_para);
            }else{
                
            }
        }catch(e){
            console.log('km_cl error ('+this.idx+') >>> '+e.message+', func: '+_n);
            if(typeof this.errorhandle=='function'){
                this.errorhandle(e.message);
            }
        }
    };
}
var km_cmdlist={};

var km_kb={
    showing:[],
    _fw:function (o,para,func){
        if(o==null){return;}
        if(typeof func=="function"){func(o,para);}
        o.style.display='block';
    },
    _set:function (o,para,func,func2,para2){try{
        this._fw(o,para,func);
        this.showing.push({o:o,para:para2,func:func2});
    }catch(_de){
        alert('km_kb._set: '+_de.message);
    }},
    _hide:function (){
        for(_k=this.showing.length-1;_k>=0;_k--){
            try{this.showing[_k].o.style.display='none';}catch(_ex){}
        }
        this.showing=[];
    },
    _hideo:function (o){
        for(_k=this.showing.length-1;_k>=0;_k--){
            if(o==this.showing[_k].o){
                this.showing[_k].o.style.display='none';
                this.showing[_k]=null;
                delete this.showing[_k];
                break;
            }
        }
    },
    _try:function (o){
        if(typeof window.fo=='object'){
            if(km_btn.suspend){
                km_btn.fc(window.fo,'mouseout');
                km_btn.suspend=false;
                return;
            }
        }
        if(this.showing.length==0){return false;}
        try{
            var ent=$d.evt();
            if(!o){o=$d.elem(ent);}
        }catch(eg1){}
        for(_k=this.showing.length-1;_k>=0;_k--){
            this._tryo(o,_k,o);
        }
        for(_k=0;_k<this.showing.length;_k++){
            if(this.showing[_k]!=null){return false;}
        }
        this.showing=[];
    },
    _tryo:function (_o,_s,o){
        if(this.showing[_s]==null){return false;}
        if(_o==this.showing[_s].o){return false;}
        if((_o==null)||(_o.tagName=="BODY")){
            var __o=this.showing[_s].o;
            var __para=this.showing[_s].para;
            var __c=true;
            if((typeof this.showing[_s].func!="undefined")&&(this.showing[_s].func!=null)){
                __c=this.showing[_s].func(__o,o,__para,_s);
            }
            if(__c){
                this.showing[_s].o.style.display='none';
                this.showing[_s]=null;
            }
            return false;
        }
        this._tryo(_o.parentNode,_s,o);
    }
};
function __kb(){
    km_kb._try();
}
var $d={
    removeTextN:function (d){
        try{
            if(!d){return;}
            if(!d.hasChildNodes()){return;}
            var _li=d.childNodes;
            for(var _j=_li.length-1;_j>=0;_j--){
                var d_i=_li[_j];
                if((d_i.nodeType==3)&&(d_i.nodeValue.replace(/[ \f\n\r\t\v]/g,"")=="")){
                    d_i.parentNode.removeChild(d_i);
                }else{
                    var _d=d_i;
                    $d.removeTextN(_d);
                }
            }
        }catch(ex){}
    },
    getWin:function (frame,doc){
        if(PF_ie){return frame.contentWindow;}
        if(!doc){doc=$d.getDoc(frame);}
        if(doc.parentWindow){
            return doc.parentWindow;
        }
        if((isBrowser().indexOf("gecko")!=-1)||(isBrowser().indexOf("safari")!=-1)){
            var scriptElement=doc.createElement('script');
            scriptElement.innerHTML='document.parentWindow=window';
            var parentElement=doc.documentElement;
            parentElement.appendChild(scriptElement);
            parentElement.removeChild(scriptElement);
            return doc.parentWindow;
        }
        return doc.defaultView;
    },
    getDoc:function (frame){
        if(frame==null){return null;}
        if((isBrowser().indexOf("gecko")!=-1)||(isBrowser().indexOf("safari")!=-1)){
            doc=(frame.document || frame.contentWindow.document);
        }else{
            doc=(frame.contentDocument || frame.contentWindow.document);
        }
        return doc;
    },
    evt:function (){
        if(document.all)return window.event;
        try{
            func=$d.evt.caller;
            while(func!=null){
                var arg0=func.arguments[0];
                if(arg0){if((arg0.constructor==Event||arg0.constructor==MouseEvent)||(typeof(arg0)=="object"&&arg0.preventDefault&&arg0.stopPropagation)){return arg0;}}
                func=func.caller;
            }
        }catch(er2){return window.event;}
        return null;
    },
    elem:function (ent){
        try{return ent.srcElement||ent.target;}catch(_em){return null;}
    },
    dk:function (cmd){var ent=$d.evt();if(ent.keyCode==13){
        if(typeof cmd=="function"){cmd();}else{$d.eval(cmd);}
    }},
    setInterval_i:function (){
        window.addEventListener('message', function(e) {
            console.log(e.data);
        },false);
        var it=1000; //1s
        var iframe=document.createElement('iframe');
        iframe.style.display='none';
        iframe.id='timerios';
        //iframe.src='data:text/html,%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%09%3Cmeta%20charset%3D%22utf-8%22%20%2F%3E%0A%09%3Cmeta%20http-equiv%3D%22refresh%22%20content%3D%22'+it+'%22%20id%3D%22metarefresh%22%20%2F%3E%0A%09%3Ctitle%3Ex%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%09%3Cscript%3Etop.postMessage%28%27refresh%27%2C%20%27%2A%27%29%3B%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E';
        var f='';
        iframe.src=f;

        document.body.insertBefore(iframe, document.body.childNodes[0]);

        /*
        var s='';
        s+='<!doctype html>';
        s+='<html><head>';
        s+='<meta charset="utf-8">';
        s+='<meta http-equiv="refresh" content="15" id="metarefresh">';
        s+='<title>reload</title>';
        s+='</head>';
        s+='<body>';
        s+='<script>top.postMessage(\'[data]\', \'*\');</script>';
        s+='</body>';
        s+='</html>';
        */

    },
    clearInterval_i:function (){
        if($$('timerios')){$$('timerios').parentNode.removeChild($$('timerios'));}
        //window.removeEventListener();
    }
};
function $$(d,p,v,w){
    if(!d){return;}
    if(!w){w=window;}
    var _d=d;
    var g=(typeof _d=="object")?_d:w.document.getElementById(_d);
    if(!g){
        var _g=w.document.getElementsByName(d);
        if(_g.length>0){g=_g[0];}
    }
    if(!g){return;}
    switch(p){
    case "c":g.className=v;break;
    case "h":
        try{g.innerHTML=v.replace(/[\f\n\r\t\v]/g,"");}catch(ex){
            var _d=(typeof d=="object")?d.id:d;
            alert(_d+'\n'+v);
        }
        break;
    case "visibility":g.style.visibility=v;break;
    case "b":g.style.visibility=v;break;
    case "src":g.src=v;break;
    case "value":g.value=v;break;
    case "v":g.value=v;break;
    case "disabled":g.disabled=(v=="true");break;
    case "style":
        try{
            var t=v.split(",");
            for(var o=0;o<t.length;o++){
                if(t[o]!=""){
                    var a=t[o].split(":");
                    if(PF_ie){
                        w.g=g;
                        w.g.style[a[0]]=a[1].replace(/\'/g,"");
                        w.g=null;
                    }else{
                        w['_g_']=g;
                        w['_g_'].style[a[0]]=a[1].replace(/\'/g,"");
                        delete w['_g_'];
                    }
                }
            }

        }catch(_eg){km_debug.a("",_eg.message+"\n"+d);}
        break;
    }
    return g;
}
function sub_getPa(val,pa){
    if((pa==null)||(pa=="")){pa=top.location.href;}
    if(pa.indexOf(val+"=")==-1){return "";}
    var ppa1=pa.split(val+"=");
    var ppa2=(ppa1[1].indexOf('&')!=-1)?ppa1[1].split("&"):[ppa1[1]];
    return String(ppa2[0]);
}

