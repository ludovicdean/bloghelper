import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStatusBannerComponent } from './blog-status-banner.component';

describe('BlogStatusBannerComponent', () => {
  let component: BlogStatusBannerComponent;
  let fixture: ComponentFixture<BlogStatusBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogStatusBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogStatusBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
