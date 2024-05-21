import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecendComponent } from './secend.component';

describe('SecendComponent', () => {
  let component: SecendComponent;
  let fixture: ComponentFixture<SecendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
