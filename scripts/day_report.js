function SetDelay (func,time) {
    setTimeout(func,time);
}


//下拉类信息
function dropdown_info() {
    $("#p1_QueZHZJC > div.f-field-body-cell > div > input[type=hidden]:nth-child(1)").attr("value","否");     //是否曾与确诊患者有密切接触
}

//家庭成员是否出现症状
function family_info () {
     if ($("#p1_JiaRen > div.f-field-body-cell > div > div").hasClass("f-checked")) {
        $("#p1_JiaRen > div.f-field-body-cell > div > div").removeClass("f-checked");
     }
}
//选择类信息
function select_info() {
    //清空选项
    for (var i=0;i<=28;i++) {
        $("#fineui_"+String(i)+"-inputEl-icon").removeClass("f-checked");
     };
     var used_info_num = [0,5,7,9,12,15,17,21,23,25,30,31];   //元素标签
     $("#p1_ChengNuo > div.f-field-body-cell > div > label").click();
     used_info_num.forEach(function(item) {
        $("#fineui_"+String(item)+"-inputEl-icon").click();
    })
}
//确认
function confirm () {
    try {
         var confirm_btn1 = document.querySelector("#fineui_36");
         if (confirm_btn1) {
            confirm_btn1.click();
         }
    }
    catch(err) {
        console.log(err);
    }
}

//提交
function submit() {
    var submit_btn = document.querySelector("#p1_ctl01_btnSubmit");
    if (submit_btn) {
        submit_btn.click();
    }
}

//需填写的信息
function input_info() {
    $("#p1_XiangXDZ-inputEl").val("your addresss");  //地址:如校内s楼
}

function  DayReport() {
    try {
    dropdown_info();            //下拉类信息
    select_info();              //选择类信息
    input_info();               //填写类信息
    family_info(); 
    SetDelay(submit,2000);  //提交
    SetDelay(confirm,2500); //确认
    }
    catch(err) {
        console.log(err);
    }
};

$(document).ready(function(){
    SetDelay(DayReport,1000);
});





