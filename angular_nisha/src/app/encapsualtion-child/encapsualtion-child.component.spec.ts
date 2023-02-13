import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsualtionChildComponent } from './encapsualtion-child.component';

describe('EncapsualtionChildComponent', () => {
  let component: EncapsualtionChildComponent;
  let fixture: ComponentFixture<EncapsualtionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncapsualtionChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsualtionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
