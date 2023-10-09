import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrapidoComponent } from './contrapido.component';

describe('ContrapidoComponent', () => {
  let component: ContrapidoComponent;
  let fixture: ComponentFixture<ContrapidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrapidoComponent]
    });
    fixture = TestBed.createComponent(ContrapidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
