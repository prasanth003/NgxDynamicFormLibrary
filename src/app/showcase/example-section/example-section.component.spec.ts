import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSectionComponent } from './example-section.component';

describe('ExampleSectionComponent', () => {
  let component: ExampleSectionComponent;
  let fixture: ComponentFixture<ExampleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
