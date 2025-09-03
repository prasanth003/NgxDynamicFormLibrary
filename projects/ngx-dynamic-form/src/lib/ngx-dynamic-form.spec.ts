import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicForm } from './ngx-dynamic-form';

describe('NgxDynamicForm', () => {
  let component: NgxDynamicForm;
  let fixture: ComponentFixture<NgxDynamicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDynamicForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
