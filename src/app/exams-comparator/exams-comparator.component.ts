import { Component, OnInit } from '@angular/core';
import { exams } from '../data-structures';

interface Exam {
  name: string;
  references: {
    male: { min: number, max: number },
    female: { min: number, max: number },
  };
}

@Component({
  selector: 'hcl-exams-comparator',
  templateUrl: './exams-comparator.component.html',
  styleUrls: ['./exams-comparator.component.scss']
})
export class ExamsComparatorComponent implements OnInit {

  exams = exams;
  results: any = {};
  gender = 'male';

  constructor() { }

  ngOnInit(): void {
  }

  getText(exam: Exam): string {

    if (exam.references[this.gender].min >= 0) {

      return 'Entre ' +
        exam.references[this.gender].min + ' e ' +
        exam.references[this.gender].max + '.';

    }

    return 'Abaixo de ' + exam.references[this.gender].max + '.';

  }

  getBackground(exam: Exam, index: number): { in: boolean, out: boolean } {

    const result = +this.results['exam' + index];

    if (!result) {
      return { in: false, out: false };
    }

    if (
      result >= exam.references[this.gender].min &&
      result <= exam.references[this.gender].max
    ) {
      return { in: true, out: false };
    }

    return { in: false, out: true };

  }

}
