import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrtflprinComponent } from './prtflprin.component';

describe('PrtflprinComponent', () => {
  let component: PrtflprinComponent;
  let fixture: ComponentFixture<PrtflprinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrtflprinComponent]
    });
    fixture = TestBed.createComponent(PrtflprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
