System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var SurveyApplication;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            // create a class with annotations..
            SurveyApplication = (function () {
                function SurveyApplication() {
                    this.title = 'Studenttrack surveys';
                }
                SurveyApplication = __decorate([
                    core_1.Component({
                        selector: 'studenttrack-survey',
                        template: "\n\t <h1>{{title}}</h1>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SurveyApplication);
                return SurveyApplication;
            })();
            // bootstrap our application..
            browser_1.bootstrap(SurveyApplication);
        }
    }
});
//# sourceMappingURL=app.js.map