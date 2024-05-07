import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneespersonnellesComponent } from './donneespersonnelles.component';

describe('DonneespersonnellesComponent', () => {
  let component: DonneespersonnellesComponent;
  let fixture: ComponentFixture<DonneespersonnellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonneespersonnellesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonneespersonnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
