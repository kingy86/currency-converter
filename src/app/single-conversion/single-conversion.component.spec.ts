import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleConversionComponent } from './single-conversion.component';

describe('SingleConversionComponent', () => {
  let component: SingleConversionComponent;
  let fixture: ComponentFixture<SingleConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleConversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
