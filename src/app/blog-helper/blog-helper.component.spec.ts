import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHelperComponent } from './blog-helper.component';

describe('BlogHelperComponent', () => {
  let component: BlogHelperComponent;
  let fixture: ComponentFixture<BlogHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
