import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDetallesComponent } from './entrada-detalles.component';

describe('EntradaDetallesComponent', () => {
  let component: EntradaDetallesComponent;
  let fixture: ComponentFixture<EntradaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
