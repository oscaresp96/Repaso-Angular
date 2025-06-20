import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDoctoresComponent } from './agregar-doctores.component';

describe('AgregarDoctoresComponent', () => {
  let component: AgregarDoctoresComponent;
  let fixture: ComponentFixture<AgregarDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarDoctoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
