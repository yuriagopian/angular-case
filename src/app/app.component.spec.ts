import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CicloComponent } from './ciclo/ciclo.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        CicloComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'caseQ3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('caseQ3');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('caseQ3 app is running!');
  });

  it('should render button Mudar Valor and button Deletar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.hasAttribute('button'));
    expect(compiled.querySelectorAll('button')?.item(0)?.textContent).toContain('Mudar Valor');
    expect(compiled.querySelectorAll('button')?.item(1)?.textContent).toContain('Deletar');
    expect(compiled.querySelectorAll('button')?.item(2)?.textContent).toContain('Load Module A');
    expect(compiled.querySelectorAll('button')?.item(2)?.style.padding).toContain('20px');

    expect(compiled.querySelector('button')?.textContent).toContain('Mudar Valor');
  });
});
