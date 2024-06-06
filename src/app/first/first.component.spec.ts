import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponent,
        RouterModule.forRoot(routes),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
