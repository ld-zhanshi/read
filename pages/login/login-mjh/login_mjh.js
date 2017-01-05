    function getbdyh(){
        var arr=localStorage.bdyh?JSON.parse(localStorage.bdyh):[];
        // console.log(arr)
        return arr;
    }
    function setbdyh(arr){
        localStorage.bdyh=JSON.stringify(arr)
    }

    var bdyh=getbdyh()
    var yhobj={}
    var jlyh=''
    function dlyz(a,b){
        if(dataarr.length){
            for(var i=0;i<dataarr.length;i++){
                if(dataarr[i][a]==b){
                    jlyh=dataarr[i]
                    return true
                }
            }
            return false
        }
    }
    
    // 验证用户名
    var dlk1=false;
    $('.mjh-dl-yhm').change(function(){
        var yhmval=$(this).val()
        if(!dlyz('yhm',yhmval)){
            $('.mjh-dl-ts1').css('display','flex')
            $(this).addClass('active')
        }else{
            dlk1=true;
        }
    })
    $('.mjh-dl-yhm').focus(function(){
        $('.mjh-dl-ts1').css('display','none')
        $(this).val('')
        $(this).removeClass('active')
    })

// 验证密码
    var dlk2=false;
    $('.mjh-dl-mm').change(function(){
        var mmval=$(this).val()
        if(mmval!=jlyh.mm){
            $('.mjh-dl-ts').css('display','flex')
            $(this).addClass('active')
        }else{
            dlk2=true;
            dldl()
        }
    })
    $('.mjh-dl-mm').focus(function(){
        $('.mjh-dl-ts').css('display','none')
        $(this).val('')
        $(this).removeClass('active')
    })

    var dlk=false
    function dldl(){
        if(dlk1&&dlk2){
            dlk=true
            $('.mjh-sl-sub').addClass('active')
        }
    }


    function bdyhyz(b){
        if(bdyh.length){
            for(var i=0;i<bdyh.length;i++){
                if(bdyh[i].yhm==b){
                    return true
                }
            }
            return false
        }
    }


    $('.mjh-sl-sub').click(function(){
        var jzmmk=document.querySelector('.mjh-dl-jzmm').checked
        if(dlk){
            yhobj.yhm=$('.mjh-dl-yhm').val()
            if(jzmmk){
                yhobj.mm=$('.mjh-dl-mm').val()
            }else{yhobj.mm=''}
            if(!bdyhyz(yhobj.yhm)){
                bdyh.push(yhobj)
                setbdyh(bdyh)
            }
            location.replace('../../../index.html')
        }
    })



// 检测本地用户
    if(!bdyh.length){
        $('.mjh-dl-yhxz').hide()
    }else{
        $('.mjh-dl-yhxz').css('display','flex')
    }
    console.log(bdyh)
    
var app=angular.module("app",[])
app.controller('dlc',function($scope){
    $scope.yhf=false;
    $scope.bdyh=bdyh
    $scope.yhdj=function(v){
        $('.mjh-dl-yhm').val(v.yhm)
        $('.mjh-dl-mm').val(v.mm)
        dlk=true
        dlyz('yhm',v.yhm)
        $('.mjh-dl-yhxz').hide()
    }
})
