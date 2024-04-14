function countStartStopSwitch_half(t1, t2){
    var timeStart = new Date(t1).getTime();
    var timeStop = new Date(t2).getTime();
    var timeNow = new Date().getTime();
    if (timeNow < timeStart) {
        document.write("<center><iframe id=\"online-alarm-kur-iframe\" src=\"https://embed-countdown.onlinealarmkur.com/zh-cn/#" + t1 + "@Asia%2FHong_Kong\" style=\"width: 100%; height:100; margin: 0px; display: block; border: 0px;\"></iframe></center>");
    } else if (timeNow > timeStop) {
        document.write("<span class=\"subtitle2\">已结束</span>");
    } else {
        document.write("<span class=\"subtitle2\">进行中</span>");
    }
}
