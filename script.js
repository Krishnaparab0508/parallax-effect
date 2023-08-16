document.addEventListener("mousemove",function(details){
    document.querySelectorAll(".img").forEach((element) =>{
        const position = element.getAttribute("value");
        var x = (window.innerWidth - details.clientX)*position/50;
        var y = (window.innerHeight - details.clientX)*position/50;
        element.style.transform=`translateX(${x}px) translateY(${y}px)`;
    })
})