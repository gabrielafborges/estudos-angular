import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSimplesComponent } from './observable-simples.component';

describe('ObservableSimplesComponent', () => {
  let component: ObservableSimplesComponent;
  let fixture: ComponentFixture<ObservableSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableSimplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
