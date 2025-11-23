import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicFormAntd } from './ngx-dynamic-form-antd';
import { NgxDynamicForm } from '@ngx-dynamic-form/ngx-dynamic-form';

describe('NgxDynamicFormAntd', () => {
  let component: NgxDynamicFormAntd;
  let fixture: ComponentFixture<NgxDynamicFormAntd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDynamicFormAntd]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicFormAntd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
