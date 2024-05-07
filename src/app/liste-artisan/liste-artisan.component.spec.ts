import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArtisanComponent } from './liste-artisan.component';

describe('ListeArtisanComponent', () => {
  let component: ListeArtisanComponent;
  let fixture: ComponentFixture<ListeArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeArtisanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
