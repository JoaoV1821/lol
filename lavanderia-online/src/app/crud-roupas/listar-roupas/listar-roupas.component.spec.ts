import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRoupasComponent } from './listar-roupas.component';

describe('ListarRoupasComponent', () => {
  let component: ListarRoupasComponent;
  let fixture: ComponentFixture<ListarRoupasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRoupasComponent]
    });
    fixture = TestBed.createComponent(ListarRoupasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
