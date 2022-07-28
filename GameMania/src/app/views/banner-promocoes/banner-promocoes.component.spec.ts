import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPromocoesComponent } from './banner-promocoes.component';

describe('BannerPromocoesComponent', () => {
  let component: BannerPromocoesComponent;
  let fixture: ComponentFixture<BannerPromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPromocoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
