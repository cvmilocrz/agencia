import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvmiloComponent } from './cvmilo.component';

describe('CvmiloComponent', () => {
  let component: CvmiloComponent;
  let fixture: ComponentFixture<CvmiloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvmiloComponent]
    });
    fixture = TestBed.createComponent(CvmiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
