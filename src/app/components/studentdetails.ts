// YOUR IMPORTS HERE...
import {Component, EventEmitter} from 'angular2/core';
import {student} from '../models/student';
import { StudentFormatter } from '../pipes/studentFormatter';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected'],
	pipes:[StudentFormatter],
	template:`
	<div (click)="setSelected()" [ngClass]="{defaultPrimaryColor:isselected, student:true}" [innerHTML] ="student |  studentFormatter"></div>
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