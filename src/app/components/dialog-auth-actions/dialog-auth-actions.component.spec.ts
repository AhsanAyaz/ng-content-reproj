import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAuthActionsComponent } from './dialog-auth-actions.component';

describe('DialogAuthActionsComponent', () => {
  let component: DialogAuthActionsComponent;
  let fixture: ComponentFixture<DialogAuthActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAuthActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAuthActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
