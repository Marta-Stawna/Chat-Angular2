import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordsListComponent } from './key-words-list.component';

describe('KeyWordsListComponent', () => {
  let component: KeyWordsListComponent;
  let fixture: ComponentFixture<KeyWordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyWordsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyWordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
