import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishedCardListComponent } from './unpublished-card-list.component';

describe('UnpublishedCardListComponent', () => {
  let component: UnpublishedCardListComponent;
  let fixture: ComponentFixture<UnpublishedCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnpublishedCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnpublishedCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
