z('[data-collapse]').on("click", function () {
    var targetId = this.getAttribute("data-collapse");
    var target = document.getElementById(targetId);

    if (z(target).isVisible()) {
        z(target).hide();
    } else {
        z(target).show();
    }

});