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
                data: 'data={"headline":"ßÙ~¡¾' + timeStr + '¡¿(³µÉÏ³Ë¿Í:' + followersCount + 'Ãû)"}',
                complete: function () {
                    console.log("ßÙ~~");
                    setTimeout(Tada, 20000);
                }
            });
        }
    });
}
Tada();


function ReplaceNum(){
var numList=[[1,"Ò¼"]
[2,"·¡"]
[3,"Èþ"]
[4,"ËÁ"]
[5,"Îé"]
[6,"Â½"]
[7,"Æâ"]
[8,"°Æ"]
[9,"¾Á"]
[0,"Áã"]];

}