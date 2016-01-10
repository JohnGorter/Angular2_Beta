System.register(["angular2/core", "angular2/common", './services/studenttrackservice', './services/studentservice', './pipes/studentformatter'], function(exports_1) {
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
    var core_1, common_1, studenttrackservice_1, studentservice_1, studentformatter_1;
    var DemoFormSku;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (studenttrackservice_1_1) {
                studenttrackservice_1 = studenttrackservice_1_1;
            },
            function (studentservice_1_1) {
                studentservice_1 = studentservice_1_1;
            },
            function (studentformatter_1_1) {
                studentformatter_1 = studentformatter_1_1;
            }],
        execute: function() {
            DemoFormSku = (function () {
                function DemoFormSku(studentservice, studenttrackservice) {
                    this.studenttrackservice = studenttrackservice;
                    this.studentservice = studentservice;
                }
                DemoFormSku.prototype.onSubmitFormA = function (form) {
                    if (form.valid) {
                        this.studenttrackservice.addStudentTrack(form.value.trackname);
                    }
                };
                DemoFormSku.prototype.onSubmitFormB = function (form) {
                    if (form.valid) {
                        var track = this.studenttrackservice.getStudentTrackByName(form.value.track);
                        track.addStudentToTrack(this.studentservice.getStudentById(form.value.student));
                    }
                };
                DemoFormSku = __decorate([
                    core_1.Component({
                        selector: 'demo-form-sku',
                        directives: [common_1.FORM_DIRECTIVES],
                        pipes: [studentformatter_1.StudentFormatter],
                        template: "\n    <div class=\"trackform light-primary-color text-primary-color\"><h1 class=\"dark-primary-color text-primary-color\">Add studenttrack or student to track</h1>\n    <br/>\n    <form #fa=\"ngForm\" (submit)=\"onSubmitFormA(fa)\" style=\"display:inline;margin-left:50px;\">\n    <span class=\"form-group\">\n      <label for=\"trackname\">Add a new track</label>\n      <input type=\"text\" class=\"form-control\" id=\"trackName\" placeholder=\"Track Name\" ngControl=\"trackname\" required />\n       <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!fa.valid\">Add</button>\n    </span>\n   \n    </form>\n    <form #fb=\"ngForm\" (submit)=\"onSubmitFormB(fb)\" style=\"float:right;margin-right:100px;\">\n    <span class=\"form-group\">\n      <label for=\"student\">Add Student</label>\n      <select name=\"student\" id=\"student\" ngControl=\"student\">\n        <option value=\"\">-select a student-</option>\n        <option *ngFor=\"#student of studentservice.getStudents()\" [value]=\"student.id\">{{ student.firstname }}</option>\n      </select>\n      <label for=\"track\">to track</label>\n     <select name=\"track\" id=\"student\" ngControl=\"track\" required>\n        <option value=\"\" selected>-select a track-</option>\n        <option *ngFor=\"#track of studenttrackservice.getStudentTracks()\" [value]=\"track.name\">{{ track.name }}</option>\n      </select>\n       <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!fb.valid\">Add</button>\n    </span>\n    </form>\n    <br/><br/>\n    </div>\n  ",
                        styles: ["\n\t .trackform { border:1px solid black;margin:5px;padding:0px; }\n\t .trackform h1 { margin:0px;padding:15px;}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [studentservice_1.StudentService, studenttrackservice_1.StudentTrackService])
                ], DemoFormSku);
                return DemoFormSku;
            })();
            exports_1("DemoFormSku", DemoFormSku);
        }
    }
});
//# sourceMappingURL=form.js.map