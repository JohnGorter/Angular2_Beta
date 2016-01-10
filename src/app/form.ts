import {Component } from "angular2/core";  
import { bootstrap } from 'angular2/platform/browser';
import { FORM_DIRECTIVES } from "angular2/common";
import { StudentTrackService } from './services/studenttrackservice';
import { StudentService } from './services/studentservice';
import { StudentFormatter } from './pipes/studentformatter';

@Component({  
  selector: 'demo-form-sku',
  directives: [FORM_DIRECTIVES],  
  pipes:[StudentFormatter],
  template: `
    <div class="trackform light-primary-color text-primary-color"><h1 class="dark-primary-color text-primary-color">Add studenttrack or student to track</h1>
    <br/>
    <form ... style="display:inline;margin-left:50px;">
    <span class="form-group">
      <label for="trackname">Add a new track</label>
      <input type="text" class="form-control" id="trackName" placeholder="Track Name" ... required />
       <button type="submit" class="btn btn-default" ... >Add</button>
    </span>
   
    </form>
    <form ... style="float:right;margin-right:100px;">
    <span class="form-group">
      <label for="student">Add Student</label>
      <select name="student" id="student" ngControl="student">
        <option value="">-select a student-</option>
        <option *ngFor="#student of studentservice.getStudents()" ...>...</option>
      </select>
      <label for="track">to track</label>
     <select name="track" id="student" ngControl="track" required>
        <option value="" selected>-select a track-</option>
        <option *ngFor="#track of studenttrackservice.getStudentTracks()" ...>....</option>
      </select>
       <button type="submit" class="btn btn-default" ...>Add</button>
    </span>
    </form>
    <br/><br/>
    </div>
  `,
  styles:[`
	 .trackform { border:1px solid black;margin:5px;padding:0px; }
	 .trackform h1 { margin:0px;padding:15px;}
	`]
})
export class DemoFormSku {  
      studenttrackservice: StudentTrackService;
      studentservice: StudentService;
           
      constructor(studentservice: StudentService, studenttrackservice:StudentTrackService){
            this.studenttrackservice = studenttrackservice;
            this.studentservice = studentservice;
      }
      onSubmitFormA(form){
         if (form.valid) {
          // add a studenttrack to the studenttrack list
        }
      }
      onSubmitFormB(form) { 
        if (form.valid) {
          // add the selected student to the selected studenttrack
        }
      }
}