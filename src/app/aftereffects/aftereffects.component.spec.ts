import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftereffectsComponent } from './aftereffects.component';

describe('AftereffectsComponent', () => {
  let component: AftereffectsComponent;
  let fixture: ComponentFixture<AftereffectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AftereffectsComponent]
    });
    fixture = TestBed.createComponent(AftereffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
