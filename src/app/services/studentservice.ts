import { student } from '../models/student';

export class StudentService {
	
	students:student[] = new Array();
	
	constructor(){ 
		
		this.students.push(new student(1, 'John', 'Gorter', 'HAN'));
		this.students.push(new student(2, 'Harold', 'Gorter', 'HAN'));
		this.students.push(new student(3, 'Niels', 'Gorter', 'HAN'));
		this.students.push(new student(4, 'Other', 'Gorter', 'HAN'));
	}
	
	getStudents() : student[] {
		return this.students;
	}
	
	getStudentById(id:number) : student {
		
		for (var st in this.students)
		  if (this.students[st].id == id) return this.students[st];
		 return undefined;
		 
	}
}