import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  protected form: FormGroup;

  constructor(private builder: FormBuilder, private tasks: TaskServiceService) {
    this.initForm();
  }

  initForm() {
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      assigned: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmission(...data) {
    if (this.form.dirty && this.form.valid) {
      this.tasks.addTask(<any>{
        name: data[0],
        date: data[1],
        assigned: data[2]
      });
      this.form.reset();
    } else {
      let clear = confirm("INVALID INPUT\n\nMust be at least 3 characters, and date is required.\nClear Inputs?");
      if (clear) {
        this.form.reset();
      }
    }
  }

  ngOnInit() {}

}
