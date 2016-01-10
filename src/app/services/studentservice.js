System.register(['../models/student'], function(exports_1) {
    var student_1;
    var StudentService;
    return {
        setters:[
            function (student_1_1) {
                student_1 = student_1_1;
            }],
        execute: function() {
            StudentService = (function () {
                function StudentService() {
                    this.students = new Array();
                    this.students.push(new student_1.student(1, 'John', 'Gorter', 'HAN'));
                    this.students.push(new student_1.student(2, 'Harold', 'Gorter', 'HAN'));
                    this.students.push(new student_1.student(3, 'Niels', 'Gorter', 'HAN'));
                    this.students.push(new student_1.student(4, 'Other', 'Gorter', 'HAN'));
                }
                StudentService.prototype.getStudents = function () {
                    return this.students;
                };
                StudentService.prototype.getStudentById = function (id) {
                    for (var st in this.students)
                        if (this.students[st].id == id)
                            return this.students[st];
                    return undefined;
                };
                return StudentService;
            })();
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=studentservice.js.map