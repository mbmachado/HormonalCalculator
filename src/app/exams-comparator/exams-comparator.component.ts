import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { exams } from '../data-structures';

@Component({
  selector: 'hcl-exams-comparator',
  templateUrl: './exams-comparator.component.html',
  styleUrls: ['./exams-comparator.component.scss']
})
export class ExamsComparatorComponent implements OnInit {

  exams = exams;
  form: FormGroup;
  gender = new FormControl('male');

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      control1: []
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(tap(console.log)).subscribe();
    this.gender.valueChanges.pipe(tap(console.log)).subscribe();
  }

}
