webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view_game_view__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        var result = navParams.get('checkAnswer'), correctAnswer = navParams.get('correctAnswer'), total = navParams.get('totalQuizNum');
        this.answerIsCorrect = result;
        this.correctAnswer = correctAnswer;
        this.totalQuizNum = total;
    }
    FeedbackPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('quizIndex').then(function (val) {
            _this.currentIndex = val;
        });
    };
    FeedbackPage.prototype.nextQuiz = function () {
        var _this = this;
        this.storage.get('quizIndex').then(function (val) {
            var currentQuizIndex = val;
            _this.storage.set('quizIndex', currentQuizIndex + 1);
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__game_view_game_view__["a" /* GameViewPage */]);
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\feedback\feedback.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trivia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <ion-grid>\n    <ion-row align-items-center>\n      <ion-col class="center" align-self-center>       \n        <h2 class="feedback">\n          {{(answerIsCorrect === true) ? "Correct!" : "Aww wrong answer!"}}\n        </h2>\n        <ion-img *ngIf="answerIsCorrect === false"\n          width="150" height="150" src="https://firebasestorage.googleapis.com/v0/b/datatest-cb8b3.appspot.com/o/ionic-trivia-img%2Fluna-sad.png?alt=media&token=d6423686-09c1-4c42-bdc9-b2841e543bf8">\n        </ion-img>\n        <ion-img *ngIf="answerIsCorrect === true"\n          width="150" height="150" src="https://firebasestorage.googleapis.com/v0/b/datatest-cb8b3.appspot.com/o/ionic-trivia-img%2Fluna-happy.png?alt=media&token=edbf230e-a450-4484-b34f-2c6179fd8b30">\n        </ion-img>\n        <h5 class="feedback" *ngIf="answerIsCorrect === false">\n          Correct answer is<br> "{{correctAnswer}}"\n        </h5>\n        <div class="center">\n          <button ion-button (click)="nextQuiz()">\n            {{(currentIndex+1 === totalQuizNum) ? "Show me how I did!" : "Next question!"}}\n          </button>\n        </div>\n      </ion-col>    \n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_view_game_view__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ResultsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('results').then(function (val) {
            _this.results = val;
            _this.quizTotal = _this.results.length;
            var filterAnswers = _this.results.filter(function (answer) { return answer.yourAnswer === answer.correctAnswer; });
            _this.correctTotal = filterAnswers.length;
        });
    };
    ResultsPage.prototype.backHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    ResultsPage.prototype.restart = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__game_view_game_view__["a" /* GameViewPage */]);
        this.storage.set('quizIndex', 0);
        this.storage.set('results', []);
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\results\results.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trivia</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid *ngIf = "results">\n    <ion-row>\n      <ion-col width-50 offset-25>       \n        <h2 class="feedback">\n          Your results\n        </h2>\n        <h1>\n            You got {{correctTotal}} out of {{quizTotal}}!\n        </h1>\n        <p *ngIf="correctTotal === quizTotal">\n          You are the master of Trivia!\n        </p>\n        <p *ngIf="correctTotal/quizTotal >= .75">\n          You almost got a perfect score keep it up!\n        </p>\n        <p *ngIf="correctTotal/quizTotal < .75">\n          You can do this! Maybe try playing again?\n        </p>\n        <ion-list>\n          <ion-item *ngFor="let result of results">\n            Correct answer: {{result.correctAnswer}}\n            \n            Your answer: {{result.yourAnswer}}\n          </ion-item>  \n        </ion-list>\n        <div class="center">\n          <button ion-button (click)="backHome()">Back to home</button>\n        </div>\n        <div class="center">\n          <button ion-button (click)="restart()">Play the same quizzes again</button>\n        </div>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\results\results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('option').then(function (val) {
            if (val != null) {
                var option = JSON.parse(val);
                _this.category = option.category;
                _this.difficulty = option.difficulty;
                _this.quizNum = option.quizNum;
                _this.type = option.type;
                _this.encodage = option.encodage;
            }
            else {
                _this.category = 17;
                _this.difficulty = 'medium';
                _this.quizNum = 10;
                _this.type = '';
                _this.encodage = '';
            }
        });
    }
    SettingsPage.prototype.saveForm = function () {
        var option = {
            category: this.category,
            difficulty: this.difficulty,
            quizNum: this.quizNum,
            type: this.type,
            encodage: this.encodage
        };
        this.storage.set('option', JSON.stringify(option));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <form (ngSubmit)="saveForm()">\n            <!-- Choix de la catégorie -->\n            <ion-item>\n              <ion-label>Categorie</ion-label>\n              <ion-select [(ngModel)]="category" name="catergory" value="number">\n                <ion-option value=12 >Music</ion-option>\n                <ion-option value=14 >Television</ion-option>\n                <ion-option value=11 >Film</ion-option>\n                <ion-option value=17 >Science & Nature</ion-option>\n                <ion-option value=18 >Computers</ion-option>\n                <ion-option value=21 >Sports</ion-option>\n                <ion-option value=27 >Animals</ion-option>\n                <ion-option value=24 >Politics</ion-option>\n                <ion-option value=25 >Art</ion-option>\n                <ion-option value=20 >Mythology</ion-option>\n              </ion-select>\n            </ion-item>\n            <!-- Choix de la difficulté -->\n            <ion-item>\n              <ion-label>Difficulté</ion-label>\n              <ion-select [(ngModel)]="difficulty" name="difficulty" value="string">\n                <ion-option value="easy">Easy</ion-option>\n                <ion-option value="medium">Medium</ion-option>\n                <ion-option value="hard">Hard</ion-option>\n              </ion-select>\n            </ion-item>\n            \n            <!-- Choix du type -->\n            <ion-item>\n              <ion-label>Type</ion-label>\n              <ion-select [(ngModel)]="type" name="type" value="string">\n                <ion-option value="multiple">Multipe Choice</ion-option>\n                <ion-option value="boolean">True/False</ion-option>\n                <ion-option value="">Any</ion-option>\n              </ion-select>\n            </ion-item>\n\n              <!-- Choix de l\'encodage -->\n              <ion-item>\n                <ion-label>Encodage</ion-label>\n                <ion-select [(ngModel)]="encodage" name="encodage" value="string">\n                  <ion-option value="">Default Encoding</ion-option>\n                  <ion-option value="url3986">URL Encoding (RFC 3986)</ion-option>\n                  <ion-option value="base64">Base64 Encoding</ion-option>\n                </ion-select>\n              </ion-item>\n\n            <!-- nombre de question -->\n            <ion-item>\n              <ion-label>\n               Nombre de questions\n              </ion-label>\n              <ion-input [(ngModel)]="quizNum" name="quizNum" type="number"></ion-input>\n            </ion-item>\n            <button ion-button type="submit" block>Sauvegarder</button>\n          </form>\n        </ion-list>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n            '/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feedback/feedback.module": [
		282,
		3
	],
	"../pages/game-view/game-view.module": [
		283,
		2
	],
	"../pages/results/results.module": [
		284,
		1
	],
	"../pages/settings/settings.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizProvider = /** @class */ (function () {
    function QuizProvider(http) {
        this.http = http;
        console.log('Hello QuizProvider Provider');
        this.url = 'https://opentdb.com/api.php?amount=';
    }
    QuizProvider.prototype.getQuiz = function (category, difficulty, quizNum, type, encodage) {
        return this.http.get(this.url + quizNum + '&category=' + category + '&difficulty=' + difficulty + '&type=' + type + '&encodage=' + encodage)
            .map(function (res) { return res.json(); });
    };
    QuizProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], QuizProvider);
    return QuizProvider;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col width-100>\n        <ion-list>\n          <ion-item>\n            <strong>App Name: </strong> Endless Trivia\n          </ion-item>\n          <ion-item>\n            <strong>Version: </strong> 0.1.0\n          </ion-item>\n          <ion-item>\n            <strong>Description: </strong> Simple trivia app\n          </ion-item>\n          <ion-item>\n            <strong>Created by: </strong> Bi Yoo\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_game_view_game_view__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_results_results__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_quiz_quiz__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_game_view_game_view__["a" /* GameViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_results_results__["a" /* ResultsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-view/game-view.module#GameViewPageModule', name: 'GameViewPage', segment: 'game-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_game_view_game_view__["a" /* GameViewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_results_results__["a" /* ResultsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_quiz_quiz__["a" /* QuizProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.hide();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_feedback__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__results_results__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameViewPage = /** @class */ (function () {
    function GameViewPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    GameViewPage.prototype.shuffle = function (arr) {
        var currentIndex = arr.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
    };
    GameViewPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('quizIndex').then(function (val) {
            _this.quizIndex = val;
        });
        this.storage.get('quizzes').then(function (val) {
            _this.quizzes = JSON.parse(val);
            _this.totalQuizNum = _this.quizzes.results.length;
            if (_this.quizzes !== null && _this.totalQuizNum >= _this.quizIndex + 1) {
                _this.currentQuiz = _this.quizzes.results[_this.quizIndex];
                _this.answers = _this.currentQuiz.incorrect_answers;
                _this.correct = _this.currentQuiz.correct_answer;
                _this.answers.push(_this.correct);
                _this.shuffle(_this.answers);
            }
            else if (_this.totalQuizNum < _this.quizIndex + 1) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__results_results__["a" /* ResultsPage */]);
            }
            ;
        });
    };
    GameViewPage.prototype.trackAnswers = function (answer) {
        var _this = this;
        this.storage.get('results').then(function (val) {
            var results = val, quizResults = {
                yourAnswer: answer,
                correctAnswer: _this.correct
            };
            results.push(quizResults);
            _this.storage.set('results', results);
        });
    };
    GameViewPage.prototype.handleAnswer = function (answer) {
        if (answer === this.correct) {
            this.trackAnswers(answer);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feedback_feedback__["a" /* FeedbackPage */], {
                checkAnswer: true,
                totalQuizNum: this.totalQuizNum
            });
        }
        else {
            this.trackAnswers(answer);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feedback_feedback__["a" /* FeedbackPage */], {
                checkAnswer: false,
                correctAnswer: this.correct,
                totalQuizNum: this.totalQuizNum
            });
        }
    };
    GameViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-view',template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\game-view\game-view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Trivia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="home">\n  <ion-grid *ngIf="currentQuiz">\n    <ion-row>\n      <ion-col width-50 offset-25>\n        <ion-label class="category">\n          <b>Category: </b>{{currentQuiz.category}}\n        </ion-label>\n        <ion-label class="category">     \n          <b>difficulty: </b>{{currentQuiz.difficulty}}\n        </ion-label>\n     \n        <h2 class="question">{{currentQuiz.question}}</h2>\n        \n        <ion-list>\n          <ion-item class="answers" *ngFor="let answer of answers" (click)="handleAnswer(answer)">\n              {{answer}}\n          </ion-item>\n        </ion-list>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\game-view\game-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], GameViewPage);
    return GameViewPage;
}());

//# sourceMappingURL=game-view.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_quiz_quiz__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_view_game_view__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, quizProvider, storage) {
        this.navCtrl = navCtrl;
        this.quizProvider = quizProvider;
        this.storage = storage;
    }
    ;
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('option').then(function (val) {
            if (val !== null) {
                _this.option = JSON.parse(val);
            }
            else {
                _this.option = {
                    category: 15,
                    difficulty: 'medium',
                    quizNum: 10,
                    type: '',
                    encodage: ''
                };
            }
            ;
            _this.quizProvider.getQuiz(_this.option.category, _this.option.difficulty, _this.option.quizNum, _this.option.type, _this.option.encodage).
                subscribe(function (quiz) {
                _this.storage.set('quizzes', JSON.stringify(quiz));
            });
        });
    };
    ;
    HomePage.prototype.start = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__game_view_game_view__["a" /* GameViewPage */]);
        this.storage.set('quizIndex', 0);
        this.storage.set('results', []);
    };
    ;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Steve\Desktop\trivial\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Trivia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <ion-grid class="home">\n    <ion-row align-items-center>\n      <ion-col align-self-center>\n        <ion-img width="150" height="150" src="https://firebasestorage.googleapis.com/v0/b/datatest-cb8b3.appspot.com/o/ionic-trivia-img%2Fluna-luna.png?alt=media&token=0420d480-5598-4325-a35d-9194c72b9ca3"></ion-img>\n        <h2 class="question">Welcome to Trivia</h2>\n          <button ion-button (click)="start()">Start</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Steve\Desktop\trivial\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_quiz_quiz__["a" /* QuizProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

;
//# sourceMappingURL=home.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map