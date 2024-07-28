import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntrPage } from './intr.page';

describe('IntrPage', () => {
  let component: IntrPage;
  let fixture: ComponentFixture<IntrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
