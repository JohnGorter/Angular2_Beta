import {Component, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import {RouteConfig,  RouterLink, RouterOutlet, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router'; 
import { StudentDetails} from './components/studentdetails';
import { student, studenttrack} from './models/student';
import { StudentService } from './services/studentservice';
import { StudentTrackService } from './services/studenttrackservice';
import { StudentCard } from './components/studentcard';
import { StudentForm } from './form';

@Component({
	selector: 'studenttrack-survey',
	directives:[StudentDetails, StudentForm, .. your directives here ..],
	providers:[StudentService, StudentTrackService],
	template: `
	<student-form></student-form>
	<div *ngFor="#studenttrack of studenttracks.getStudentTracks()" class="studenttrack light-primary-color text-primary-color">
	   <h1 class="dark-primary-color text-primary-color">Studenttrack {{studenttrack.name}} (<span [textContent]="getCount(studenttrack)"></span> attendees)</h1>
			<studentdetails *ngFor="#student of studenttrack.getStudents()"  
		   		 .. your routelink here .. [student]="student" [isselected]="currentstudent === student && currenttrack === studenttrack" (deleted)="removeStudent(studenttrack, student)" (selected)="setSelected(studenttrack, student)"> 
			</studentdetails>
	 </div>
	 <div style="margin:5px;">.. your outlet here ..</div>
	`,
	styles:[`
	 .studenttrack { border:1px solid black;margin:5px;padding:0px; }
	 .studenttrack h1 { margin:0px;padding:15px;}
	`] 
}) 
@RouteConfig([
	.. your config here ..
])
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
bootstrap(SurveyApplication, [ROUTER_PROVIDERS, 
       provide(LocationStrategy, {useClass: HashLocationStrategy})]); // 6 