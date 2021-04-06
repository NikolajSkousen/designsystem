import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';

import { ActionSheetPopoutComponent } from '@kirbydesign/designsystem';

// #region AUTO-GENERATED - PLEASE DON'T EDIT CONTENT WITHIN!
@Component({
  selector: 'kirby-action-sheet-popout',
  template: '<ng-content></ng-content>',
  providers: [
    {
      provide: ActionSheetPopoutComponent,
      useExisting: forwardRef(() => MockActionSheetPopoutComponent),
    },
  ],
})
export class MockActionSheetPopoutComponent {
  @Input() cancelButtonText: string;
  @Input() hideCancel: boolean;
  @Input() disabled: boolean;
  @Input() header: string;
  @Input() subheader: string;
  @Input() items: Array<ActionSheetItem>;
  @Output() cancel = new EventEmitter();
  @Output() itemSelect = new EventEmitter<ActionSheetItem>();
}

// #endregion