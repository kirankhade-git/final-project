
var tl=gsap.timeline()
tl.from(".line h1",{
    y:100,
    stagger:0.2,
    duration:0.6,
    delay:0.3,
})
tl.from("#line-part",{ 
    opacity:0,
    onstart:function(){
var h5timer= document.querySelector('#line-part h5')
var grow=0;
setInterval(function(){
    if(grow<100){
     h5timer.innerHTML=grow++
    }else{
        h5timer.innerHTML=grow;
    }
},35);
}
});
 tl.to('.line 2',{
    Animation:"anime",
    opacity:1,
 })  
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3.5,

})
tl.from("#page1",{
    delay:0.33,
    y:1200,
    opacity:0,
    easy:power4,
})
tl.to("#loader",{
    display:"none",
})

