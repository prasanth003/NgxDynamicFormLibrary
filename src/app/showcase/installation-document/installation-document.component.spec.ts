import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationDocumentComponent } from './installation-document.component';

describe('InstallationDocumentComponent', () => {
  let component: InstallationDocumentComponent;
  let fixture: ComponentFixture<InstallationDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstallationDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
