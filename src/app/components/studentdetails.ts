// YOUR IMPORTS HERE...
import {Component, EventEmitter} from 'angular2/core';
import {student} from '../models/student';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected'],
	template:`
	<div (click)="setSelected()" [ngClass]="{defaultPrimaryColor:isselected, student:true}" >{{ student.firstname }} {{ student.lastname }} {{ student.school }}</div>
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