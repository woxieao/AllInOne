function GetNowTime() {
    function formatNum(num) {
        return num < 10 ? "0" + num : num;
    }
    var nowTime = new Date();
    return nowTime.getFullYear() + "-" + formatNum(nowTime.getMonth()+1) + "-" + formatNum(nowTime.getDate()) + " " + formatNum(nowTime.getHours()) + ":" + formatNum(nowTime.getMinutes());
}



function Tada() {
    $.ajax({
        url: "https://www.zhihu.com/people/XA__/followers",
        complete: function (result) {
            var followers = document.createElement('div');
            $(followers).html(result.responseText);
            var followersCount = $(followers).find("a[href='/people/XA__/followers']").eq(0).find("strong").eq(0).html();
            var timeStr = GetNowTime();
            $.ajax({
                url: "https://www.zhihu.com/people/edit",
                type: "post",
                data: 'data={"headline":"��~��' + timeStr + '��(���ϳ˿�:' + followersCount + '��)"}',
                complete: function () {
                    console.log("��~~");
                    setTimeout(Tada, 20000);
                }
            });
        }
    });
}
Tada();


function ReplaceNum(){
var numList=[[1,"Ҽ"]
[2,"��"]
[3,"��"]
[4,"��"]
[5,"��"]
[6,"½"]
[7,"��"]
[8,"��"]
[9,"��"]
[0,"��"]];

}