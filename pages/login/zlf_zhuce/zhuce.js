

    function getdata(){
        var arr=localStorage.zhanghu?JSON.parse(localStorage.zhanghu):[];
        console.log(arr)
        return arr;
    }
    function setdata(arr){
        localStorage.zhanghu=JSON.stringify(arr)
    }
    var dataarr=getdata()
    function yzdata(a,b){
        if(dataarr.length){
            for(var i=0;i<dataarr.length;i++){
                if(dataarr[i][a]==b){
                    return true
                }
            }
            return false
        }
    }
    // 验证用户名
    var yhmk=false;
    $('.mjh-zck-yhm').change(function(){
        var yhmval=$(this).val()
        if(yzdata('yhm',yhmval)){
            $('.mjh-zc-ts1').show()
            $(this).parent().addClass('active')
        }else{
            yhmk=true;
            zc1ym()
        }
    })
    $('.mjh-zck-yhm').focus(function(){
        $('.mjh-zc-ts1').hide()
        $(this).val('')
        $(this).parent().removeClass('active')
    })
    // 验证手机号
    var sjhk=false;
    $('.mjh-zck-sjh').change(function(){
        var sjhval=$(this).val()
        var re = /^1\d{10}$/
        if (!re.test(sjhval)) {
            $('.mjh-zc-ts4').show()
            $(this).parent().addClass('active')
        }else if(yzdata('tel',sjhval)){
            $('.mjh-zc-ts2').show()
            $(this).parent().addClass('active')
        }else{
            sjhk=true;
            zc1ym()
        }
    })
    $('.mjh-zck-sjh').focus(function(){
        $('.mjh-zc-ts2,.mjh-zc-ts4').hide()
        $(this).val('')
        $(this).parent().removeClass('active')
    })
    // 验证两次输入密码
    var mmk=false;
    $('.mjh-zck-mm2').change(function(){
        var mm1=$('.mjh-zck-mm1').val()
        var mm2=$('.mjh-zck-mm2').val()
        // console.log(mm1,mm2)
        if(mm1!=mm2){
            $('.mjh-zc-ts3').show()
        }else{
            mmk=true;
            zc1ym()
        }
    })
    $('.mjh-zck-mm2,.mjh-zck-mm1').focus(function(){
        $('.mjh-zc-ts3').hide()
        $(this).val('')
    })
    // 验证是否填写完整
    var zc1k=false
    function zc1ym(){
        if(yhmk&&sjhk&&mmk){
            zc1k=true
            $('.mjh-zc-btn1').removeClass('zlf_btn_box1')
        }
    }
    
    var obj={}
    $('.mjh-zc-btn1').click(function(){
        if(zc1k){
            obj.yhm=$('.mjh-zck-yhm').val()
            obj.tel=$('.mjh-zck-sjh').val()
            obj.mm=$('.mjh-zck-mm2').val()
            $('.mjh-zc1').hide()
            $('.mjh-zc2').show()
        }
        
    })
    // 头像  未验证
    $('.mjh-zc-btn2').click(function(){

        $('.mjh-zc2').hide()
        $('.mjh-zc3').show()
    })

    // 性别
    $('.mjh-zc-btn31').click(function(){
        var sexval=$("input[name='sex']:checked").val()
        if(sexval){
            obj.sex=sexval
            $('.mjh-zc31').hide()
            $('.mjh-zc32').show()
        }
    })

    // 喜欢类型
    $('.mjh-zc-btn32').click(function(){
        var lxval=$("input[class='xhlx']:checked")
        var arr1=[]
        lxval.val(function(i,v){
            arr1.push(v)
        })
        if(arr1.length){
            obj.xhlx=arr1
            $('.mjh-zc32').hide()
            $('.mjh-zc33').show()
        }
    })

    // 喜欢作者选择
    $('.mjh-zc-btn33').click(function(){
        var zzval=$("input[class='mjh-xhzz']:checked")
        var arr2=[]
        zzval.val(function(i,v){
            arr2.push(v)
        })
        // console.log(arr2)
        if(arr2.length){
            obj.xhzz=arr2
            console.log(obj)
            dataarr.push(obj)
            setdata(dataarr)
        }
    })
