import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesSmartphoneComponent } from './slides-smartphone.component';

describe('SlidesSmartphoneComponent', () => {
  let component: SlidesSmartphoneComponent;
  let fixture: ComponentFixture<SlidesSmartphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesSmartphoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidesSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
