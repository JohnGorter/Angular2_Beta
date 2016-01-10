System.register([], function(exports_1) {
    var student, studenttrack;
    return {
        setters:[],
        execute: function() {
            // expose firstname, lastname and school properties
            student = (function () {
                // your code here...
                function student(id, firstname, lastname, school, address, phone, age) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.school = school;
                    this.address = address;
                    this.phone = phone;
                    this.age = age;
                }
                return student;
            })();
            exports_1("student", student);
            // expose name property, expose addStudentToTrack and getStudents methods
            studenttrack = (function () {
                function studenttrack(name) {
                    this.name = name;
                    this.students = Array();
                }
                studenttrack.prototype.addStudentToTrack = function (student) {
                    for (var st in this.students)
                        if (this.students[st] == student)
                            return; // student already added
                    this.students.push(student);
                };
                studenttrack.prototype.removeStudent = function (student) {
                    for (var st in this.students)
                        if (this.students[st] == student)
                            this.students.splice(st, 1);
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