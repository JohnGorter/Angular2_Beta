import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { StudentDetails } from './components/studentdetails';
import { student, studenttrack } from './models/student';

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
	studenttrack:studenttrack;
	currentstudent:student;
	
	constructor (){
	  this.studenttrack = new studenttrack("Angular2");
	  this.studenttrack.addStudentToTrack(new student (1, 'John', 'Gorter', 'HAN'));
	}

	setSelected(student:student){
		this.currentstudent = student;
	}
	
	getCount(){
		return this.studenttrack.getStudents().length;
	}
}

// bootstrap our application..
bootstrap(SurveyApplication); 