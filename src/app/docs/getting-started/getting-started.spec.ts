import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStarted } from './getting-started';

describe('GettingStarted', () => {
  let component: GettingStarted;
  let fixture: ComponentFixture<GettingStarted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingStarted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettingStarted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
