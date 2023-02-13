import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsualtionComponent } from './encapsualtion.component';

describe('EncapsualtionComponent', () => {
  let component: EncapsualtionComponent;
  let fixture: ComponentFixture<EncapsualtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncapsualtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsualtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
