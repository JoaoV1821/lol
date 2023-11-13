import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstadoComponent } from './editar-estado.component';

describe('EditarEstadoComponent', () => {
  let component: EditarEstadoComponent;
  let fixture: ComponentFixture<EditarEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEstadoComponent]
    });
    fixture = TestBed.createComponent(EditarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
