import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataInjectSignalComponent } from './data-inject-signal/data-inject-signal.component';
import { LocalSessionStorageComponent } from './data-inject/local-session-storage/local-session-storage.component';
import { ServiceInjectionComponent } from './service-injection/service-injection.component';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes),
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        ServiceInjectionComponent,
        DataInjectSignalComponent,
        LocalSessionStorageComponent,
        AppComponent
      ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: {
            params: of({}), 
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Nachbearbeitungs App' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Nachbearbeitungs App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Basic Route');
  });
});
