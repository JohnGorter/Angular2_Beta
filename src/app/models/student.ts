// COMPLETE THE STUDENT CLASS
// expose firstname, lastname and school properties
export class student{
	// your code here...
	constructor(public id:number, public firstname:string, public lastname:string, public school:string){}

}

// COMPLETE THE STUDENTTRACK CLASS
// expose name property, expose addStudentToTrack and getStudents methods
export class studenttrack {
	// your code here...
   private students:student[];
	 
   constructor(public name:string){
		this.students = Array();
	}

	addStudentToTrack(student:student){
		this.students.push(student);
	}
	
	getStudents(){
		return this.students;
	}
}