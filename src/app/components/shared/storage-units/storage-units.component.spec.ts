import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageUnitsComponent } from './storage-units.component';

describe('StorageUnitsComponent', () => {
  let component: StorageUnitsComponent;
  let fixture: ComponentFixture<StorageUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
