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

var button1 = document.getElementById("button1");
var target1 = document.getElementById(button1.getAttribute('data-collapse'));
var collapse1 = {
    button: button1,
    target: target1,

    open: function () {
        z(this.target).show()
    },
    close: function () {
        z(this.target).hide()
    }

    // TODO: toggle
};

z(collapse1.button).on("click", collapse1.open.bind(collapse1));

var button2 = document.getElementById("button2");
var target2 = document.getElementById(button2.getAttribute('data-collapse'));
var collapse2 = {
    button: button2,
    target: target2,
    open: function () {
        z(this.target).show()
    },
    close: function () {
        z(this.target).hide()
    }

    // TODO: toggle
};
z(collapse2.button).on("click", collapse2.open.bind(collapse2));
