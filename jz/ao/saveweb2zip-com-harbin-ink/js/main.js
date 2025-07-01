$(function() {
    // 滚动
    jQuery(".gund").slide({mainCell:"ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:50,trigger:"click"});


});
function closepop() {
  $('.pop').removeClass('cur');
}
function ajaxtips(nr) {
  layer.msg(nr); 
}

function ajaxform(id) {
    layer.load();
    $.post(url_form+'?id='+id, {}, function (res) {
        console.log(res);
        layer.closeAll('loading');
        if(res.code==1){
            let list=res.data.list;
            let html='<form class="itlxt_form" action="'+url_action+'?id='+res.data.info.id+'">';
            //html+='<li><label>申请主题：</label><div class="zhuti"><a href="/detail/'+res.data.info.id+'" target="_blank">查看详情</a></div></li>';
            html+='<input type="text" name="username" autocomplete="off" class="cmglUW" placeholder="remplir prénom"/>';
                for (let i = 0; i < list.length; i++) {
                    switch (list[i]['type']) {
                        case 'select':
                            let option=list[i]['option'];
                           // html+='<li><label>'+list[i]['name']+'：</label>';
                                html+='<select name="'+list[i]['mark']+'">';
                                    for (let ii = 0; ii < option.length; ii++) {
                                        html+='<option value="'+option[ii]+'">'+option[ii]+'</option>';
                                    }
                                html+='</select>';
                            //html+='</li>';
                            break;
                        default:
                            html+='<input type="text" name="'+list[i]['mark']+'" class="dIiJNZ" autocomplete="off" placeholder="remplir '+list[i]['name']+'"/>';
                            break;
                    }
                    
                }
			html+='<div class="captcha-container" style="margin-top: 15px;height: 46px;padding-left: 3px;font-size: 20px;">+33</div>';
            //html+='<div class="captcha-container"><input type="text" name="captcha_code" class="cmglUWs" autocomplete="off" placeholder="remplir code"/><img class="yzm_code" src="'+url_captcha+'" id="yzm_code" style="cursor: pointer;" onClick="javascript:create_code();"/></div>';
            html+='<button type="button" class="sc-eABdvX fJaYYD" onclick="ajaxaction()">CONFIRMER LA SOUMISSION</button></li></form>';
            $('.pop .tit').html(res.data.info.name);
            $('.pop .box').html(html);
            $('.pop').addClass('cur');
        }else{
            layer.closeAll('loading');
            layer.msg(res.msg);
        }
    }).fail(function () {
        layer.closeAll('loading');
        layer.msg('Erreur système'); 
    });
}
function ajaxaction000() {
    var data=$('.itlxt_form').serialize();
    layer.load();
    $.post($('.itlxt_form').attr('action'),data, function (res) {
        layer.closeAll('loading');
        if(res.code==1){
          closepop();
          layer.msg(res.msg);
		  setTimeout(function() {
location.href = '/detail/1';
}, 1000);
        }else{
            layer.msg(res.msg);
        }
    }).fail(function () {
        layer.closeAll('loading');
        layer.msg('系统错误'); 
    });
}
function ajaxsearch(cid) {
    layer.load();
    $.post(url_search+'?type=1',{}, function (res) {
        layer.closeAll('loading');
        let list=res.data;
        let html='<form class="itlxt_form" action="'+url_search+'"><ul class="form">';
        html+='<li><label>请输入会员账号：</label><input type="text" name="username" id="search_username" autocomplete="off" placeholder="请输入你的会员帐号"/></li>';
        html+='<li><label>选择查询项目：</label>';
        html+='<select name="model"  id="search_model">';
            for (let i = 0; i < list.length; i++) {
                if(parseInt(list[i]['id'])==parseInt(cid)){
                    html+='<option value="'+list[i]['id']+'" selected>'+list[i]['name']+'</option>';
                }else{
                    html+='<option value="'+list[i]['id']+'">'+list[i]['name']+'</option>';
                }
            }
        html+='</select></li><li class="submit"><button type="button" onclick="ajaxlist()">点击查询</button></li>';
        html+='</ul></form>';
        $('.pop .tit').html('申请进度查询');
        $('.pop .box').html(html);
        $('.pop').addClass('cur');
    }).fail(function () {
        layer.closeAll('loading');
        layer.msg('系统错误'); 
    });
}
function ajaxlist(page,tusername,tmodel) {
    layer.load();
    var username=tusername ? tusername : $("#search_username").val();
    var model=tmodel ? tmodel : $("#search_model").val();
    if(!username){
      layer.closeAll('loading');
      layer.msg('请填写会员帐号！');
      return false;
    }
    $.post(url_search, {username:username,model:model,page:page}, function (res) {
        layer.closeAll('loading');
        var html='';
        if(res.code==1){
            var data_list=res.data;
            if(data_list.total){
                html+='<table><thead><tr><td>会员账号</td><td>申请时间</td><td>申请状态</td><td>查看回复</td></tr></thead><tbody>';
                for (var i in data_list.data) { 
                    html+='        <tr>';
                    html+='            <td>'+data_list.data[i]['username']+'</td>';
                    html+='            <td>'+data_list.data[i]['create_time']+'</td>';
                    switch (data_list.data[i]['status']) {
                        case 1:
                            html+='            <td class="yes">已处理</td>';
                            break;
                        case 2:
                            html+='            <td class="no">已拒绝</td>';
                            break;
                        default:
                            html+='            <td class="wei">未审核</td>';
                            break;
                    }
                    html+='            <td>'+data_list.data[i]['reply']+'</td>';
                    html+='        </tr>';
                } 
                html+='</tbody></table>';
                if(data_list.last_page>1){
                    html+='<div class="pagination"></div>';
                }
            }
            if(data_list.last_page>1){
                $(".pagination").paging({
                    pageNum: parseInt(data_list.current_page), // 当前页面
                    totalNum: parseInt(data_list.last_page), // 总页码
                    totalList: parseInt(data_list.total), // 记录总数量
                    callback: function(num) { //回调函数
                        ajaxlist(num,username,model);
                    }
                });
            }
        }else{
            html+='<table><thead><tr><td>会员账号</td><td>申请时间</td><td>申请状态</td><td>查看回复</td></tr></thead><tbody><tr><td colspan="4">暂无记录</td></tr></tbody></table>';
        }
        $('.pop .tit').html('审核进度查询结果');
        $('.pop .box').html(html);
    }).fail(function () {
        $("#username").val('');
        layer.closeAll('loading');
        layer.msg('系统错误'); 
    });
    
}
function create_code() {
    document.getElementById('yzm_code').src = url_captcha+'?time='+Date.parse(new Date());
}