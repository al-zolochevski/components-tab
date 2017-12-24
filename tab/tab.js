z('[data-collapse]').on("click", function () {
    var targetId = this.getAttribute("data-collapse");
    var zTarget = z('#' + targetId);

    if (zTarget.isVisible()) {
        zTarget.hide();
    } else {
        zTarget.show();
    }

});