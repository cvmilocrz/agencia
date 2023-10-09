import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerComponent } from './ter.component';

describe('TerComponent', () => {
  let component: TerComponent;
  let fixture: ComponentFixture<TerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerComponent]
    });
    fixture = TestBed.createComponent(TerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
