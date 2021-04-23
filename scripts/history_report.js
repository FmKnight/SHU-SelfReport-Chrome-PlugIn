function SetDelay (func,time) {
    setTimeout(func,time);
}

function history_report () {
    var base_url = "https://selfreport.shu.edu.cn";
    var history_url = "https://selfreport.shu.edu.cn/ReportHistory.aspx"
    var url_num = $(".f-datalist-list li");
    console.log(url_num.length);
    //获取未报送的日报信息
    for (var i= url_num.length - 1; i > 0; i--){
        unreport_url = "";
        var url = $("#Panel1_DataList1 > ul > li:nth-child("+String(i)+") > a");
        var text = url.text();
        if (text.indexOf("未填报") != -1) {
            unreported_url = base_url+url.attr("href");
         }
    }
    if (unreported_url != "") {
        window.open(unreported_url);
        window.close();
        SetDelay(window.open(history_url),4000);
    }
}
$(document).ready(function(){
    SetDelay(history_report, 500);
});
