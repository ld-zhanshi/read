    var designWidth=750;
    var fontSize=100;
    function fontsize(){
        var relWidth=document.documentElement.clientWidth;
        relfontSize=fontSize*relWidth/designWidth;
        document.getElementsByTagName("html")[0].style.fontSize=relfontSize+"px";
    }
    fontsize();
    window.onresize=fontsize;
