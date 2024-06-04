import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInjectSignalComponent } from './data-inject-signal.component';

describe('DataInjectSignalComponent', () => {
  let component: DataInjectSignalComponent;
  let fixture: ComponentFixture<DataInjectSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataInjectSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataInjectSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
