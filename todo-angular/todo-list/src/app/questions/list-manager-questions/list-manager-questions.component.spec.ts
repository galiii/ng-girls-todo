import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagerQuestionsComponent } from './list-manager-questions.component';

describe('ListManagerQuestionsComponent', () => {
  let component: ListManagerQuestionsComponent;
  let fixture: ComponentFixture<ListManagerQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManagerQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManagerQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
