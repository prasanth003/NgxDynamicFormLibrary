import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserSupportComponent } from './browser-support.component';

describe('BrowserSupportComponent', () => {
  let component: BrowserSupportComponent;
  let fixture: ComponentFixture<BrowserSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
