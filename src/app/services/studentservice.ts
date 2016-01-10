import { student } from '../models/student';

export class StudentService {
	
	students:student[] = new Array();
	
	constructor(){ 
		
		this.students.push(new student(1, 'John', 'Gorter', 'HAN', 'street 34 5555 AA Amsterdam', '0612345678', 40));
		this.students.push(new student(2, 'Harold', 'Gorter', 'HAN', 'road 2 1235 RE Leeuwarden', '0674727283', 42));
		this.students.push(new student(3, 'Niels', 'Gorter', 'HAN', 'lane 4 3444 SX Den Haag', '0612345678', 15));
		this.students.push(new student(4, 'Other', 'Gorter', 'HAN', 'street 34 5555 AA Amsterdam', '0612345678', 40));
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