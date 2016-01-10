System.register(['angular2/core', '../pipes/studentFormatter', '../services/studentservice'], function(exports_1) {
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
    var core_1, studentFormatter_1, studentservice_1;
    var StudentCard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (studentFormatter_1_1) {
                studentFormatter_1 = studentFormatter_1_1;
            },
            function (studentservice_1_1) {
                studentservice_1 = studentservice_1_1;
            }],
        execute: function() {
            StudentCard = (function () {
                function StudentCard(studentservice, your, here) {
                    if (your === void 0) { your = paraminjector; }
                    your;
                    studentretrieval;
                    here..
                    ;
                }
                StudentCard = __decorate([
                    core_1.Component({
                        selector: 'student-card',
                        inputs: ['student'],
                        pipes: [studentFormatter_1.StudentFormatter],
                        template: "\n\t<div class=\"dialog light-primary-color text-primary-color\"><div [ngClass]=\"{defaultPrimaryColor:true}\"> \n\t{{ student.firstname }} {{ student.lastname }}</div>\n\t<p> Address: {{ student.address }} <br/> Phone: {{ student.phone }} </p></div>\n\t",
                        styles: ["\n\t.dialog { border:1px solid black;};\n\t.header { margin-top:0px;}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [studentservice_1.StudentService, Object, Object])
                ], StudentCard);
                return StudentCard;
            })();
            exports_1("StudentCard", StudentCard);
        }
    }
});
//# sourceMappingURL=studentcard.js.map