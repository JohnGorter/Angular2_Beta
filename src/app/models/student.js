System.register([], function(exports_1) {
    var student, studenttrack;
    return {
        setters:[],
        execute: function() {
            // COMPLETE THE STUDENT CLASS
            // expose firstname, lastname and school properties
            student = (function () {
                // your code here...
                function student(id, firstname, lastname, school) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.school = school;
                }
                return student;
            })();
            exports_1("student", student);
            // COMPLETE THE STUDENTTRACK CLASS
            // expose name property, expose addStudentToTrack and getStudents methods
            studenttrack = (function () {
                function studenttrack(name) {
                    this.name = name;
                    this.students = Array();
                }
                studenttrack.prototype.addStudentToTrack = function (student) {
                    this.students.push(student);
                };
                studenttrack.prototype.getStudents = function () {
                    return this.students;
                };
                return studenttrack;
            })();
            exports_1("studenttrack", studenttrack);
        }
    }
});
//# sourceMappingURL=student.js.map