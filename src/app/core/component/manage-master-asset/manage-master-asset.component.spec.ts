import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMasterAssetComponent } from './manage-master-asset.component';

describe('ManageMasterAssetComponent', () => {
  let component: ManageMasterAssetComponent;
  let fixture: ComponentFixture<ManageMasterAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMasterAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMasterAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
