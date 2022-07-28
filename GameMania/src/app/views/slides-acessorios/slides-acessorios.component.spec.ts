import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesAcessoriosComponent } from './slides-acessorios.component';

describe('SlidesAcessoriosComponent', () => {
  let component: SlidesAcessoriosComponent;
  let fixture: ComponentFixture<SlidesAcessoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesAcessoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidesAcessoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
