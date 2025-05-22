import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
}) 
export class ListComponent {


    taskName = "";
    tasks: string[] = [];

    addtoList() {
      console.log("clicked",this.taskName);
      this.tasks.push(this.taskName);
      this.taskName="";

    }

}
