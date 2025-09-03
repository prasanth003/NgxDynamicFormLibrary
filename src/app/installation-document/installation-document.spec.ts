import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationDocument } from './installation-document';

describe('InstallationDocument', () => {
  let component: InstallationDocument;
  let fixture: ComponentFixture<InstallationDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallationDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
