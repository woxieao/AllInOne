//图片等比缩放 query图片外框的选择器
function imgSize(query) {
    var $dom = $(query);
    var maxWidth = $dom.width();
    var maxHeight = $dom.height();
    $(query + ' img').each(function() {
        var $this = $(this);
        var img = new Image();

        function imgSizeSet() {
            var width = img.width;
            var height = img.height;
            var ratio = Math.min(maxWidth / width, maxHeight / height); //缩放比例
            $this.css({
                "width": width * ratio + "px",
                "height": height * ratio + "px",
                "margin-left": (maxWidth - width * ratio) / 2 + "px",
                "margin-top": (maxHeight - height * ratio) / 2 + "px"
            });
            img = null;
        }
        img.src = this.getAttribute("src");
        if (img.complete) {
            imgSizeSet()
        } else {
            img.onload = imgSizeSet
        }
    });
}
