import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {StudentDetails} from './components/studentdetails';
import {student, studenttrack} from './models/student';

// create a class with annotations..
@Component({
	selector: 'studenttrack-survey',
	directives:[StudentDetails],
	template: `
	<div class="studenttrack light-primary-color text-primary-color">
	   <h1 class="dark-primary-color text-primary-color">Studenttrack {{studenttrack.name}} (<span [textContent]="getCount()"></span> attendees)</h1>
	    <studentdetails 
			[student]="student" 
			[isselected]="currentstudent === student"
			*ngFor="#student of studenttrack.getStudents()" 
			(selected)="setSelected(student)"> 
		</studentdetails>
	 </div>
	`,
	styles:[`
	 .studenttrack { border:1px solid black;margin:5px;padding:0px; }
	 .studenttrack h1 { margin:0px;padding:15px;}
	`]
})
class SurveyApplication {	
	// ADD FIELD FOR THE STUDENTTRACK
	// your code here...
	studenttrack:studenttrack;
	message = new Date().toString();
	currentstudent:student;
	
	constructor (){
		// ADD CODE HERE TO INSTANTIATE A NEW STUDENTTRACK
		// AND ADD SOME STUDENTS TO THE STUDENTTRACK
		// your code here...
	    this.studenttrack = new studenttrack('Angular2');
		this.studenttrack.addStudentToTrack(new student('John', 'Gorter', 'HAN'));
	    this.studenttrack.addStudentToTrack(new student('Harold', 'Gorter', 'HAN'));
	    this.studenttrack.addStudentToTrack(new student('Niels', 'Gorter', 'HAN'));	

	   
	   // REPLACE THIS ANONYMOUS FUNCTION WITH A PHAT ARROW ONE
	   window.setInterval(() => {
		   // RANDOMLY ADD NEW ATTENDEES TO THE STUDENTTRACK
		   // your code here...
		   this.studenttrack.addStudentToTrack(new student('Another', 'Gorter', 'HAN'));	
		   this.message = new Date().toString(); 
		   
	   }, 2000);
	}
	
	setSelected(student:student){
		console.log("student selected" + student.firstname);
		this.currentstudent = student;
	}
	getClasses(student){
		return {
			student: true,
			selected: this.currentstudent === student
		}
	}
	
	getCount(){
		// ADD CODE THAT RETURNS THE NUMBER OF STUDENTS FROM THE STUDENTTRACK
		// your code here...
		return this.studenttrack.getStudents().length;
	}
}

// bootstrap our application..
bootstrap(SurveyApplication); 