import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControls } from './form-controls';

describe('FormControls', () => {
  let component: FormControls;
  let fixture: ComponentFixture<FormControls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControls]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControls);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
