import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCidadeComponent } from './editar-cidade.component';

describe('EditarCidadeComponent', () => {
  let component: EditarCidadeComponent;
  let fixture: ComponentFixture<EditarCidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCidadeComponent]
    });
    fixture = TestBed.createComponent(EditarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
