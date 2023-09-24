"use strict";
/* Общие методы используются для вставки текста в header   footer*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTourElemListener = exports.initToursDivElements = exports.initFooterTitle = exports.initHeaderTitle = void 0;
/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
var tours_1 = require("../../templates/tours");
var modalService_1 = require("@services/modal/modalService");
function initHeaderTitle(ticketName, selector) {
    var headerElement = document.querySelector("header");
    var targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
exports.initHeaderTitle = initHeaderTitle;
function initFooterTitle(ticketName, selector) {
    var headerElement = document.querySelector("footer");
    var targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
exports.initFooterTitle = initFooterTitle;
function initToursDivElements(data) {
    if (Array.isArray(data)) {
        var rootElement = document.querySelector(".main-app");
        var tourWrap = document.createElement("div");
        tourWrap.classList.add("tour-wrap");
        // init click for modal
        initTourElemListener(tourWrap);
        var rootElementData_1 = "";
        data.forEach(function (el, i) {
            rootElementData_1 += (0, tours_1.getTourTemplate)(el, i);
        });
        tourWrap.innerHTML = rootElementData_1;
        rootElement.appendChild(tourWrap);
    }
}
exports.initToursDivElements = initToursDivElements;
function initTourElemListener(tourWrap) {
    tourWrap.addEventListener("click", function (ev) {
        var targetItem = ev.target;
        var parentItem = targetItem === null || targetItem === void 0 ? void 0 : targetItem.parentNode;
        var realTarget;
        if (targetItem.hasAttribute("data-tour-item-index")) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute("data-tour-item-index")) {
            realTarget = parentItem;
        }
        if (realTarget) {
            var dataIndex = realTarget.getAttribute("data-tour-item-index");
            (0, modalService_1.openModal)("order", Number(dataIndex));
        }
    });
}
exports.initTourElemListener = initTourElemListener;
//# sourceMappingURL=general.js.map