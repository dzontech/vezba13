import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbasingleComponent } from './nbasingle.component';

describe('NbasingleComponent', () => {
  let component: NbasingleComponent;
  let fixture: ComponentFixture<NbasingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbasingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbasingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
