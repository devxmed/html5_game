gmath=function(){var t={};return t.getDisSquare=function(t,n){var r=n.x-t.x,a=n.y-t.y;return r*r+a*a},t.trunkDir=function(t){return(t%=360)<0&&(t+=360),t},t.trunkDir2=function(t){return(t%=360)>180&&(t-=360),t<-180&&(t+=360),t},t.rotatePoint=function(t,n){var r=n*Math.PI/180;return{x:t.x*Math.cos(r)-t.y*Math.sin(r),y:t.x*Math.sin(r)+t.y*Math.cos(r)}},t.pAngle=function(t,n){var r;return 0==t?r=n>0?90:-90:(r=Math.atan(n/t)/Math.PI*180,t<0&&(r+=180),r)},t.angleP=function(t,n){var r=t*Math.PI/180;return{x:Math.cos(r)*n,y:Math.sin(r)*n}},t}();