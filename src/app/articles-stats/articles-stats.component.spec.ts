import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesStatsComponent } from './articles-stats.component';

describe('ArticlesStatsComponent', () => {
  let component: ArticlesStatsComponent;
  let fixture: ComponentFixture<ArticlesStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
