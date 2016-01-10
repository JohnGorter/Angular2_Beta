import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser'
import { StudentDetails} from './components/studentdetails';
import { student, studenttrack} from './models/student';
import { StudentService } from './services/studentservice';
import { StudentTrackService } from './services/studenttrackservice';
import { DemoFormSku } from './form';

// create a class with annotations..
@Component({
	selector: 'studenttrack-survey',
	directives:[StudentDetails, DemoFormSku],
	providers:[StudentService, StudentTrackService],
	template: `
	<demo-form-sku></demo-form-sku>
	<div *ngFor="#studenttrack of studenttracks.getStudentTracks()" class="studenttrack light-primary-color text-primary-color">
	   <h1 class="dark-primary-color text-primary-color">Studenttrack {{studenttrack.name}} (<span [textContent]="getCount(studenttrack)"></span> attendees)</h1>
		<studentdetails 
			[student]="student" 
			[isselected]="currentstudent === student && currenttrack === studenttrack"
			*ngFor="#student of studenttrack.getStudents()" 
			(deleted)="removeStudent(studenttrack, student)"
			(selected)="setSelected(studenttrack, student)"> 
		</studentdetails>
		
	 </div>
	`,
	styles:[`
	 .studenttrack { border:1px solid black;margin:5px;padding:0px; }
	 .studenttrack h1 { margin:0px;padding:15px;}
	`]
})
class SurveyApplication {	
	
	studenttracks:StudentTrackService;
	currentstudent:student;
	currenttrack:studenttrack;
	
	constructor (studenttracks: StudentTrackService){
	  this.studenttracks = studenttracks;
	}

    removeStudent(track, student){
		track.removeStudent(student);
	}

	setSelected(studenttrack:studenttrack, student:student){
		this.currentstudent = student;
		this.currenttrack = studenttrack;
	}
	
	getCount(studenttrack:studenttrack){
		return studenttrack.getStudents().length;
	}
}

// bootstrap our application..
bootstrap(SurveyApplication); 