import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSessionStorageComponent } from './local-session-storage.component';

describe('LocalSessionStorageComponent', () => {
  let component: LocalSessionStorageComponent;
  let fixture: ComponentFixture<LocalSessionStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalSessionStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalSessionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
