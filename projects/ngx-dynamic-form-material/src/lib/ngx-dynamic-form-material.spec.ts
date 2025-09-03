import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicFormMaterial } from './ngx-dynamic-form-material';

describe('NgxDynamicFormMaterial', () => {
  let component: NgxDynamicFormMaterial;
  let fixture: ComponentFixture<NgxDynamicFormMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDynamicFormMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDynamicFormMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
