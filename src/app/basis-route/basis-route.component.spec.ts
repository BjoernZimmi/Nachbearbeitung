import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasisRouteComponent } from './basis-route.component';

describe('BasisRouteComponent', () => {
  let component: BasisRouteComponent;
  let fixture: ComponentFixture<BasisRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasisRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasisRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
