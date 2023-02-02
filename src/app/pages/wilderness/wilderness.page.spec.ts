import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildernessPage } from './wilderness.page';

describe('WildernessPage', () => {
  let component: WildernessPage;
  let fixture: ComponentFixture<WildernessPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildernessPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildernessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
