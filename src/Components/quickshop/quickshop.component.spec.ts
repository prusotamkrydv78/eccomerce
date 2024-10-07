import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickshopComponent } from './quickshop.component';

describe('QuickshopComponent', () => {
  let component: QuickshopComponent;
  let fixture: ComponentFixture<QuickshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
