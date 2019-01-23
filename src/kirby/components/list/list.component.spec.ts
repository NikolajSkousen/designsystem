import { SectionByPipe } from './pipes/section-by.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ItemEventData } from 'tns-core-modules/ui/list-view/list-view';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, SectionByPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('item select event', () => {

    it('should emit the clicked item', () => {
      spyOn(component.itemSelect, 'emit');
      const itemToBeSelected = { value: 'this is a dummy item' };

      component.onItemClick(itemToBeSelected);

      expect(component.itemSelect.emit).toHaveBeenCalledTimes(1);
      expect(component.itemSelect.emit).toHaveBeenCalledWith(itemToBeSelected);
    });

    it('should emit the tapped item', () => {
      spyOn(component.itemSelect, 'emit');
      const itemToBeSelected = { value: 'item 2' };
      component.items = [
        { value: 'item 1' },
        itemToBeSelected,
        { value: 'item 3' }
      ];

      component.onItemTap({ index: 1 } as ItemEventData);

      expect(component.itemSelect.emit).toHaveBeenCalledTimes(1);
      expect(component.itemSelect.emit).toHaveBeenCalledWith(itemToBeSelected);
    });
  });

  describe('sections', () => {

    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
    });

    it('should be disabled if no section callback is defined', () => {
      fixture.detectChanges();

      expect(component.isSectionsEnabled).toBeFalsy();
    });

    it('should be enabled if a section callback is defined', () => {
      component.getSection = (item: any) => 'this is a test';

      fixture.detectChanges();

      expect(component.isSectionsEnabled).toBeTruthy();
    });
  });
});
