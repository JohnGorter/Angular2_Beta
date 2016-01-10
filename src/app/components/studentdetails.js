System.register(['angular2/core', '../pipes/studentFormatter'], function(exports_1) {
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
    var core_1, studentFormatter_1;
    var StudentDetails;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (studentFormatter_1_1) {
                studentFormatter_1 = studentFormatter_1_1;
            }],
        execute: function() {
            // YOUR COMPONENT ANNOTATION AND CLASS HERE...
            StudentDetails = (function () {
                function StudentDetails() {
                    this.selected = new core_1.EventEmitter();
                }
                StudentDetails.prototype.setSelected = function () {
                    this.selected.next(this.student);
                };
                StudentDetails = __decorate([
                    core_1.Component({
                        selector: 'studentdetails',
                        inputs: ['student', 'isselected'],
                        outputs: ['selected'],
                        pipes: [studentFormatter_1.StudentFormatter],
                        template: "\n\t<div (click)=\"setSelected()\" [ngClass]=\"{defaultPrimaryColor:isselected, student:true}\" [innerHTML] =\"student |  studentFormatter\"></div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentDetails);
                return StudentDetails;
            })();
            exports_1("StudentDetails", StudentDetails);
        }
    }
});
//# sourceMappingURL=studentdetails.js.map