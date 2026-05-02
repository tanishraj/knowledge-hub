import { Component } from '@angular/core';
import { templateJitUrl } from '../../node_modules/@angular/compiler';

@Component({
    selector: 'courses', // <courses></courses>
    template: 
    `<h2> {{ title }} </h2>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    `
})
export class CoursesComponent{
    title = "List of Courses";
    courses = ["courses 1", "courses 2", "courses 3"];
}