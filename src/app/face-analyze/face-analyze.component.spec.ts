import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAnalyzeComponent } from './face-analyze.component';

describe('FaceAnalyzeComponent', () => {
  let component: FaceAnalyzeComponent;
  let fixture: ComponentFixture<FaceAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
