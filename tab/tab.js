// function Collapse(buttonElement) {
//     var targetId = buttonElement.getAttribute("data-collapse");
//     var target = document.getElementById(targetId);
//     var zTarget = z(target);
//
//     return {
//         target: target,
//         zTarget: zTarget,
//
//         open: function () {
//             zTarget.show();
//         },
//
//         close: function () {
//             zTarget.hide();
//         },
//
//         toggle: function () {
//             if (zTarget.isVisible()) {
//                 this.close();
//             } else {
//                 this.open();
//             }
//         }
//     };
// }
//
// // TODO: resurrect unobtrusive JS
// z('[data-collapse]').on("click", function () {
//
//
// });
//
//
// var collapse1 = Collapse(z('button')[0]); // TODO: new Collapse(...)
// var collapse2 = Collapse(z('button')[1]);

/* Alex L.:
 * 1) конструктор
 * 2) new Collapse()
* */

var collapse1 = {
    button: document.getElementById("button1"),
    target: document.getElementById("collapse1"),

    open: function () {
        z(this.target).show()
    },
    close: function () {
        z(this.target).hide()
    }

    // TODO: toggle
};

z(collapse1.button).on("click", collapse1.open);

var collapse2 = {
    button: document.getElementById("button2"),
    target: document.getElementById("collapse2"),
    open: function () {
        z(this.target).show()
    },
    close: function () {
        z(this.target).hide()
    }

    // TODO: toggle
};