var base_url = "https://selfreport.shu.edu.cn/"
var history_url = "https://selfreport.shu.edu.cn/ReportHistory.aspx"
var report_base_url = "https://selfreport.shu.edu.cn/XueSFX/DayReport.aspx?day="
var day  = new Date();
var today = day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate();



function day_report () {
    var report_url = report_base_url + String(today);
    $('#DayReport').click(function () {
        chrome.tabs.create({url: report_url});
    });
}

function history_report () {
    $('#HistoryReport').click(function () {
        chrome.tabs.create({url: history_url });
    })
}

function self_report () {
    $('#SelfReport').click(function () {
        chrome.tabs.create({url: base_url });
    })
}

$(document).ready(function() {
    day_report();
    history_report();
    self_report();
});





 
