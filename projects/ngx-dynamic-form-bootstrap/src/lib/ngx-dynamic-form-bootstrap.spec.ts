import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicFormBootstrap } from './ngx-dynamic-form-bootstrap';
import { NgxDynamicForm } from '@ngx-dynamic-form/ngx-dynamic-form';

describe('NgxDynamicFormBootstrap', () => {
  let component: NgxDynamicFormBootstrap;
  let fixture: ComponentFixture<NgxDynamicFormBootstrap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDynamicFormBootstrap]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicFormBootstrap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
