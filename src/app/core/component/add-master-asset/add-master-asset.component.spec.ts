import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMasterAssetComponent } from './add-master-asset.component';

describe('AddMasterAssetComponent', () => {
  let component: AddMasterAssetComponent;
  let fixture: ComponentFixture<AddMasterAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMasterAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMasterAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
