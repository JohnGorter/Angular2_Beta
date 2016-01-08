// YOUR IMPORTS HERE...
import {Component, EventEmitter} from 'angular2/core';
import {student} from '../models/student';
// ?code? //


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected'],
	// ?code? //
	template:`
	<div (click)="setSelected()" [ngClass]="{defaultPrimaryColor:isselected, student:true}" ?code? ></div>
	`
})
export class StudentDetails
{
	student:student;
	isselected:boolean;
	selected:EventEmitter = new EventEmitter();
	 
	setSelected(){
		this.selected.next(this.student); 
	}
}	