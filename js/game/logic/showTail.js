var ShowTail=function(){var a={},n=8,r=0,o=1;return a.update=function(a,e,l){if(r>0)r-=1;else if(0==(o-=1)){o=Math.floor(2+10*Math.random()),0===(n-=1)&&(n=Math.floor(20*Math.random()),r=Math.floor(20*Math.random()));var t=new Laya.Image("cars/"+Map1.mainCar.tailName+".png");t.anchorX=.5,t.anchorY=.5,t.x=a,t.y=e,t.scale(.7,.7),l.addChild(t),Laya.Tween.to(t,{y:e-120,scaleX:0,scaleY:0},1200,null,Laya.Handler.create(null,function(){t.destroy()}))}},a}();