import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsComparatorComponent } from './exams-comparator.component';

describe('ExamsComparatorComponent', () => {
  let component: ExamsComparatorComponent;
  let fixture: ComponentFixture<ExamsComparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsComparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
