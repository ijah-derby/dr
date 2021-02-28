import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycartPage } from './mycart.page';

describe('MycartPage', () => {
  let component: MycartPage;
  let fixture: ComponentFixture<MycartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
