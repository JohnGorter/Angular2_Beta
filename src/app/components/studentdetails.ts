// YOUR IMPORTS HERE...
import {Component, EventEmitter} from 'angular2/core';
import {student} from '../models/student';
import { StudentFormatter } from '../pipes/studentFormatter';


// YOUR COMPONENT ANNOTATION AND CLASS HERE...
@Component({
	selector:'studentdetails',
	inputs:['student','isselected'],
	outputs:['selected', 'deleted'],
	pipes:[StudentFormatter],
	template:`
	<div><span style="padding:1px;" (click)="setSelected()" [ngClass]="{defaultPrimaryColor:isselected, student:true}" [innerHTML] ="student |  studentFormatter">
	</span><button (click)="onDeleted()">remove</button></div>
	`
})
export class StudentDetails
{
	student:student;
	isselected:boolean;
	selected:EventEmitter = new EventEmitter();
	deleted:EventEmitter = new EventEmitter(); 
	
	setSelected(){
		this.selected.next(this.student); 
	}
	onDeleted(){
		this.deleted.next(this.student); 
	}
}	