import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDialogComponent } from './button-dialog.component';

describe('ButtonDialogComponent', () => {
  let component: ButtonDialogComponent;
  let fixture: ComponentFixture<ButtonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
