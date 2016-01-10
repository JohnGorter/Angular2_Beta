System.register(['angular2/core', '../models/student', '../services/studentservice'], function(exports_1) {
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
    var core_1, student_1, studentservice_1;
    var StudentTrackService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            },
            function (studentservice_1_1) {
                studentservice_1 = studentservice_1_1;
            }],
        execute: function() {
            StudentTrackService = (function () {
                function StudentTrackService(studentservice) {
                    this.studentTracks = new Array();
                    this.studentservice = studentservice;
                    // create a few studenttracks
                    var angular2 = new student_1.studenttrack('Angular2');
                    angular2.addStudentToTrack(studentservice.getStudentById(1));
                    angular2.addStudentToTrack(studentservice.getStudentById(2));
                    angular2.addStudentToTrack(studentservice.getStudentById(3));
                    this.studentTracks.push(angular2);
                    var angular1 = new student_1.studenttrack('AngularJS 1.5');
                    angular1.addStudentToTrack(studentservice.getStudentById(1));
                    this.studentTracks.push(angular1);
                }
                StudentTrackService.prototype.getStudentTracks = function () {
                    return this.studentTracks;
                };
                StudentTrackService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [studentservice_1.StudentService])
                ], StudentTrackService);
                return StudentTrackService;
            })();
            exports_1("StudentTrackService", StudentTrackService);
        }
    }
});
//# sourceMappingURL=studenttrackservice.js.map