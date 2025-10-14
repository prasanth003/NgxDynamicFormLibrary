import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showcase } from './showcase';

describe('Showcase', () => {
  let component: Showcase;
  let fixture: ComponentFixture<Showcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
