var World=function(){var a={};return a.end=function(){Game2.hide(),Result.show()},a.start=function(){platform.logEvent("gamePlay"),UI.hide(),Game2.show(),Map1.start();var a=3;Laya.timer.once(2e3,null,function(){Laya.timer.frameLoop(1,null,Monster.update)}),Game2.count(3),Laya.timer.loop(600,null,function t(){0!==(a-=1)?Game2.count(a):(Laya.timer.clear(null,t),Game2.start(),Game.dir=Map1.mainCar.animCanRot.rotation,Laya.timer.frameLoop(1,null,Map1.update))})},a.init=function(){Map1.init()},a}();