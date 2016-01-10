System.register(['angular2/core', 'angular2/platform/browser', './components/studentdetails', './services/studentservice', './services/studenttrackservice', './form'], function(exports_1) {
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
    var core_1, browser_1, studentdetails_1, studentservice_1, studenttrackservice_1, form_1;
    var SurveyApplication;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (studentdetails_1_1) {
                studentdetails_1 = studentdetails_1_1;
            },
            function (studentservice_1_1) {
                studentservice_1 = studentservice_1_1;
            },
            function (studenttrackservice_1_1) {
                studenttrackservice_1 = studenttrackservice_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            }],
        execute: function() {
            // create a class with annotations..
            SurveyApplication = (function () {
                function SurveyApplication(studenttracks) {
                    this.studenttracks = studenttracks;
                }
                SurveyApplication.prototype.removeStudent = function (track, student) {
                    track.removeStudent(student);
                };
                SurveyApplication.prototype.setSelected = function (studenttrack, student) {
                    this.currentstudent = student;
                    this.currenttrack = studenttrack;
                };
                SurveyApplication.prototype.getCount = function (studenttrack) {
                    return studenttrack.getStudents().length;
                };
                SurveyApplication = __decorate([
                    core_1.Component({
                        selector: 'studenttrack-survey',
                        directives: [studentdetails_1.StudentDetails, form_1.DemoFormSku],
                        providers: [studentservice_1.StudentService, studenttrackservice_1.StudentTrackService],
                        template: "\n\t<demo-form-sku></demo-form-sku>\n\t<div *ngFor=\"#studenttrack of studenttracks.getStudentTracks()\" class=\"studenttrack light-primary-color text-primary-color\">\n\t   <h1 class=\"dark-primary-color text-primary-color\">Studenttrack {{studenttrack.name}} (<span [textContent]=\"getCount(studenttrack)\"></span> attendees)</h1>\n\t\t<studentdetails \n\t\t\t[student]=\"student\" \n\t\t\t[isselected]=\"currentstudent === student && currenttrack === studenttrack\"\n\t\t\t*ngFor=\"#student of studenttrack.getStudents()\" \n\t\t\t(deleted)=\"removeStudent(studenttrack, student)\"\n\t\t\t(selected)=\"setSelected(studenttrack, student)\"> \n\t\t</studentdetails>\n\t\t\n\t </div>\n\t",
                        styles: ["\n\t .studenttrack { border:1px solid black;margin:5px;padding:0px; }\n\t .studenttrack h1 { margin:0px;padding:15px;}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [studenttrackservice_1.StudentTrackService])
                ], SurveyApplication);
                return SurveyApplication;
            })();
            // bootstrap our application..
            browser_1.bootstrap(SurveyApplication);
        }
    }
});
//# sourceMappingURL=app.js.map