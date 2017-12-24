// z('[data-collapse]').on("click", function () {
//
// });

function Collapse(buttonElement) {
    var targetId = buttonElement.getAttribute("data-collapse");
    var zTarget = z('#' + targetId);

    var obj = {
        open: function () {
            zTarget.show();
        },

        close: function () {
            zTarget.hide();
        },

        toggle: function () {
            if (zTarget.isVisible()) {
                zTarget.hide();
            } else {
                zTarget.show();
            }
        }
    };

    return obj;
}

var collapse1 = Collapse(z('button')[0]);
var collapse2 = Collapse(z('button')[1]);