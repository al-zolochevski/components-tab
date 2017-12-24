function Collapse(buttonElement) {
    var targetId = buttonElement.getAttribute("data-collapse");
    var target = document.getElementById(targetId);
    var zTarget = z(target);

    return {
        target: target,
        zTarget: zTarget,

        open: function () {
            zTarget.show();
        },

        close: function () {
            zTarget.hide();
        },

        toggle: function () {
            if (zTarget.isVisible()) {
                this.close();
            } else {
                this.open();
            }
        }
    };
}

// TODO: resurrect unobtrusive JS
// z('[data-collapse]').on("click", function () {
//
// });
var collapse1 = Collapse(z('button')[0]); // TODO: new Collapse(...)
var collapse2 = Collapse(z('button')[1]);