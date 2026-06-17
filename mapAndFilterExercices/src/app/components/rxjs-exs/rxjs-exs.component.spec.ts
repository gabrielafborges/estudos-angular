import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExsComponent } from './rxjs-exs.component';

describe('RxjsExsComponent', () => {
  let component: RxjsExsComponent;
  let fixture: ComponentFixture<RxjsExsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsExsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsExsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
