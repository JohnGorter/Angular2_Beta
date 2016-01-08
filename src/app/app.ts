import {Component } from 'angular2/core';
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
	message = new Date().toString();
	currentstudent:student;
	
	constructor (){
	   this.studenttrack = new studenttrack('Angular2');
	   this.studenttrack.addStudentToTrack(new student('John', 'Gorter', 'HAN'));
	   this.studenttrack.addStudentToTrack(new student('Harold', 'Gorter', 'HAN'));
	   this.studenttrack.addStudentToTrack(new student('Niels', 'Gorter', 'HAN'));	

	   window.setInterval(() => {
		   this.studenttrack.addStudentToTrack(new student('Another', 'Gorter', 'HAN'));	
		   this.message = new Date().toString(); 
		   
	   }, 2000);
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