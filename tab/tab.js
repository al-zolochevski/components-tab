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
 * 3) прототипы
* */


var Collapse = function(button) {

    this.button = button;
    this.target = document.getElementById(button.getAttribute('data-collapse'));

    this.open = function () {
        z(this.target).show()
    };

    this.close = function () {
        z(this.target).hide()
    };

    // TODO: toggle

    z(this.button).on("click", this.open.bind(this));
};

var collapse1 = new Collapse(document.getElementById("button1"));
var collapse2 = new Collapse(document.getElementById("button2"));
