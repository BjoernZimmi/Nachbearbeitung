import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAComponent } from './child-a.component';
import { routerModule } from '../../module/router.module';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

describe('ChildAComponent', () => {
  let component: ChildAComponent;
  let fixture: ComponentFixture<ChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAComponent, routerModule,
        RouterModule.forRoot(routes),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
