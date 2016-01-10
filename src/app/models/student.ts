
// expose firstname, lastname and school properties
export class student{
	// your code here...
	constructor(public id:number, public firstname:string, public lastname:string, public school:string){}

}

// expose name property, expose addStudentToTrack and getStudents methods
export class studenttrack {
	// your code here...
   private students:student[];
	 
   constructor(public name:string){
		this.students = Array();
	}

	addStudentToTrack(student:student){
		for (var st in this.students)
		  if (this.students[st] == student) return; // student already added
		this.students.push(student);
	}
	
	removeStudent(student:student){
		for (var st in this.students)
		  if (this.students[st] == student) 
		  		this.students.splice(st, 1); 	
	}

	getStudents(){
		return this.students;
	}
}