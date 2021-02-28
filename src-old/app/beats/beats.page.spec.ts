import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsPage } from './beats.page';

describe('BeatsPage', () => {
  let component: BeatsPage;
  let fixture: ComponentFixture<BeatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
