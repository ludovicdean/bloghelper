import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsHelperComponent } from './tags-helper.component';

describe('TagsHelperComponent', () => {
  let component: TagsHelperComponent;
  let fixture: ComponentFixture<TagsHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
