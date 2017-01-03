
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

    $('.mjh-sl-sub').click(function(){
        if(dlk){
            
        }
    })



