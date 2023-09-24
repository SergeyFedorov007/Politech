"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.openModalSecond = exports.removeModal = void 0;
function openModal(id) {
    if (id === void 0) { id = null; }
    var template = "<div>MyModal</div>";
    var modal = new Modal(id);
    modal.open(template);
}
function removeModal() { }
exports.removeModal = removeModal;
function openModalSecond(id) {
    if (id === void 0) { id = null; }
    var template = "<div>MyModal 2</div>";
    var modal = new Modal(id);
    modal.open(template);
}
exports.openModalSecond = openModalSecond;
var Modal = exports.Modal = /** @class */ (function () {
    function Modal(id) {
        if (id === void 0) { id = null; }
    }
    Modal.prototype.open = function (template) {
        var divWrap = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute("modal", this.id);
        divWrap.classList.add("modal-element");
        document.body.appendChild(divWrap);
    };
    Modal.prototype.remove = function () {
        var modalEl = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    };
    //static method
    Modal.removeById = function (id) {
        if (id === void 0) { id = null; }
        var modalId = id;
        var findEl = Modal.modals.find(function (x) { return x.id === modalId; });
        if (findEl) {
            findEl.remove();
            Modal.modals = Modal.modals.filter(function (el) { return el.id !== modalId; });
        }
        else {
            if (Array.isArray(Modal.modals)) {
                var lastEl = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    };
    Modal.modals = [];
    return Modal;
}());
var modal = new Modal();
//# sourceMappingURL=modal.js.map