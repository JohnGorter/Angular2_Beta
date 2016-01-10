import { Pipe } from 'angular2/core';
import { student } from './models/student';

@Pipe({
	name:'studentFormatter'
})
export class StudentFormatter {
	 transform(value:student, args:string[]) : any {
    	return "<b>Naam: " + value.firstname + "</b> " + value.lastname + " School: " + value.school; 
	 }
}