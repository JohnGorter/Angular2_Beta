import { Injectable } from 'angular2/core';

import { student, studenttrack } from '../models/student';
import { StudentService } from '../services/studentservice';

@Injectable()
export class StudentTrackService {
	 
	studentservice:StudentService;
	studentTracks:studenttrack[] = new Array();

	constructor (studentservice:StudentService){
		this.studentservice = studentservice;
		
		// create a few studenttracks
		var angular2 : studenttrack = new studenttrack('Angular2');
		angular2.addStudentToTrack(studentservice.getStudentById(1));
		angular2.addStudentToTrack(studentservice.getStudentById(2));
		angular2.addStudentToTrack(studentservice.getStudentById(3));
		this.studentTracks.push(angular2);
		
		var angular1 : studenttrack = new studenttrack('AngularJS 1.5');
		angular1.addStudentToTrack(studentservice.getStudentById(1));
		this.studentTracks.push(angular1);
	}
	
	getStudentTracks() : studenttrack[] {
		return this.studentTracks;
	}
	
}