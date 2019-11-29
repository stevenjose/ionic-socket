(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Chat Anónimo\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\">\n    <ion-list>\n        <ion-item>\n            <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n            <ion-label>Toogle Dark Theme</ion-label>\n            <ion-toggle mode=\"ios\" slot=\"end\" [ngModel]=\"darkMode\" (ionChange)=\"cambio()\"></ion-toggle>\n        </ion-item>\n    </ion-list>\n    <ion-grid>\n        <ion-text color=\"medium\" text-center>\n            <p>Bienvenido a nuestro chat id de user {{ currentUser }}</p>\n        </ion-text>\n        <ion-row *ngFor=\"let message of messages\">\n\n            <ion-col size=\"9\" *ngIf=\"message.user !== currentUser\" class=\"message other-message\">\n                <b>{{ message.user }}</b><br>\n                <span>{{ message.msg }}</span>\n                <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n            </ion-col>\n\n            <ion-col offset=\"3\" size=\"9\" *ngIf=\"message.user === currentUser\" class=\"message my-message\">\n                <b>{{ message.user }}</b><br>\n                <span>{{ message.msg }}</span>\n                <div class=\"time\" text-right><br>{{ message.createdAt | date:'short' }}</div>\n            </ion-col>\n\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color=\"light\">\n        <ion-row align-items-center>\n            <ion-col size=\"10\">\n                <ion-textarea color=\"primary\" auto-grow class=\"message-input\" rows=\"1\" [(ngModel)]=\"message\">\n                </ion-textarea>\n            </ion-col>\n            <ion-col size=\"2\">\n                <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"message === ''\" class=\"msg-btn\" (click)=\"sendMessage()\">\n                    <ion-icon name=\"ios-send\" slot=\"icon-only\"></ion-icon>\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-item>\n            <ion-label text-center>\n                Creditos lopezajoseg@gmail.com\n            </ion-label>\n        </ion-item>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.my-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.other-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.message-input {\n  margin-top: 0px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n}\n\n.msg-btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc2V5bWlsYS9ub2RlanMvaW9uaWMtc29ja2V0L2lvbmljLXNvY2tldC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWUge1xuICAgIGNvbG9yOiAjZGZkZmRmO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1zZy1idG4ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMC41ZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMC41ZW07XG59IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVzc2FnZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4ubXktbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogI2RmZGZkZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4ubWVzc2FnZS1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5tc2ctYnRuIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let Tab1Page = class Tab1Page {
    constructor(socket, toastCtrl) {
        this.socket = socket;
        this.toastCtrl = toastCtrl;
        this.darkMode = true;
        this.message = '';
        this.messages = [];
        this.currentUser = '';
        this.cont = 0;
    }
    ngOnInit() {
        setTimeout(data => {
            this.cont++;
            console.log('Revisando', this.cont);
        }, 2500);
        this.socket.connect();
        let name = `Usuario -${new Date().getTime()}`;
        this.currentUser = name;
        this.socket.emit('set-name', name);
        this.socket.fromEvent('users-changed').subscribe(data => {
            let user = data['user'];
            if (data['event'] === 'left') {
                this.showToast('User left: ' + user);
            }
            else {
                this.showToast('User joined: ' + user);
            }
        });
        this.socket.fromEvent('message').subscribe(message => {
            this.showToast(message['msg']);
            this.messages.push(message);
        });
    }
    sendMessage() {
        this.socket.emit('send-message', { text: this.message });
        this.message = '';
    }
    ionViewWillLeave() {
        this.socket.disconnect();
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                position: 'top',
                duration: 1000
            });
            toast.present();
        });
    }
    cambio() {
        this.darkMode = !this.darkMode;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        document.body.classList.toggle('dark');
    }
};
Tab1Page.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map