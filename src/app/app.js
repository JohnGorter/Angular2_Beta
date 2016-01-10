System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './components/studentdetails', './services/studentservice', './services/studenttrackservice', './components/studentcard', './form'], function(exports_1) {
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
    var core_1, browser_1, router_1, studentdetails_1, studentservice_1, studenttrackservice_1, studentcard_1, form_1;
    var SurveyApplication;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (studentcard_1_1) {
                studentcard_1 = studentcard_1_1;
            },
            function (form_1_1) {
                form_1 = form_1_1;
            }],
        execute: function() {
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
                        directives: [studentdetails_1.StudentDetails, form_1.StudentForm, router_1.RouterLink, router_1.RouterOutlet],
                        providers: [studentservice_1.StudentService, studenttrackservice_1.StudentTrackService],
                        template: "\n\t<student-form></student-form>\n\t<div *ngFor=\"#studenttrack of studenttracks.getStudentTracks()\" class=\"studenttrack light-primary-color text-primary-color\">\n\t   <h1 class=\"dark-primary-color text-primary-color\">Studenttrack {{studenttrack.name}} (<span [textContent]=\"getCount(studenttrack)\"></span> attendees)</h1>\n\t\t\t<studentdetails *ngFor=\"#student of studenttrack.getStudents()\"  \n\t\t   \t\t [routerLink]=\"['./Student', {id: student.id }]\" [student]=\"student\" [isselected]=\"currentstudent === student && currenttrack === studenttrack\" (deleted)=\"removeStudent(studenttrack, student)\" (selected)=\"setSelected(studenttrack, student)\"> \n\t\t\t</studentdetails>\n\t </div>\n\t <div style=\"margin:5px;\"><router-outlet></router-outlet> </div>\n\t",
                        styles: ["\n\t .studenttrack { border:1px solid black;margin:5px;padding:0px; }\n\t .studenttrack h1 { margin:0px;padding:15px;}\n\t"]
                    }),
                    router_1.RouteConfig([
                        { path: '/index/:id', as: 'Student', component: studentcard_1.StudentCard }
                    ]), 
                    __metadata('design:paramtypes', [studenttrackservice_1.StudentTrackService])
                ], SurveyApplication);
                return SurveyApplication;
            })();
            // bootstrap our application..
            browser_1.bootstrap(SurveyApplication, [router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map