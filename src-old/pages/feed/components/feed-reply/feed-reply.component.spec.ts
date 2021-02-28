import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedReplyComponent } from './feed-reply.component';

describe('FeedReplyComponent', () => {
  let component: FeedReplyComponent;
  let fixture: ComponentFixture<FeedReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedReplyComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
