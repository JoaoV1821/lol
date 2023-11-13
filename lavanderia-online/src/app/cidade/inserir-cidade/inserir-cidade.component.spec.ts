import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCidadeComponent } from './inserir-cidade.component';

describe('InserirCidadeComponent', () => {
  let component: InserirCidadeComponent;
  let fixture: ComponentFixture<InserirCidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirCidadeComponent]
    });
    fixture = TestBed.createComponent(InserirCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
