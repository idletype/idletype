function progressBar(percent, $element) {
    if(percent > 100){
        percent = 100
    }

    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}