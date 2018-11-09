import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { Color } from 'tns-core-modules/color';
import { screen } from 'platform';
import { EventData } from 'tns-core-modules/data/observable/observable';
import { FlexboxLayout } from 'tns-core-modules/ui/layouts/flexbox-layout/flexbox-layout';

const screenScale = screen.mainScreen.scale;
declare const CGSizeMake: any;
declare const android: any;

@Component({
  selector: 'kirby-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  cardSizeClass = '';
  private shadowColor: Color = new Color('#1c1c1c');
  private shadowOffset = 2.0;// TODO: Get value from common configuration

  constructor() { }

  ngOnInit() {
  }

  onViewLoaded(args: EventData) {
    const stack = <FlexboxLayout>args.object;

    // A timeout is crap, but try without, fail you will
    setTimeout(() => {
      // TODO: Get breakpoints from somewhere
      const widthDP = stack.getMeasuredWidth() / screenScale;
      if (widthDP >= 400) {
        this.cardSizeClass = 'card-large';
      } else if (widthDP >= 200) {
        this.cardSizeClass = 'card-medium';
      } else {
        this.cardSizeClass = 'card-small';
      }
    }, 100);
    this.addShadow(args);
  }

  addShadow(args: EventData) {
    const tnsView = <any>args.object;
    if (tnsView.android) {
      tnsView.eachChildView((child) => {
        if (child instanceof FlexboxLayout) {
          const bgColor = child.style.backgroundColor;
          const androidView = child.android;
          const shape = new android.graphics.drawable.GradientDrawable();
          shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
          shape.setColor(android.graphics.Color.parseColor(bgColor + ''));
          shape.setCornerRadius(16.0);// TODO: Get value from common configuration
          androidView.setBackgroundDrawable(shape);
          androidView.setElevation(16);// TODO: Get value from common configuration
          return true;
        }
      });
    } else if (tnsView.ios) {
      const iosView = tnsView.ios;
      iosView.layer.shadowColor = this.shadowColor.ios.CGColor;
      iosView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
      iosView.layer.shadowOpacity = 0.5;// TODO: Get value from common configuration
      iosView.layer.shadowRadius = 6.0;// TODO: Get value from common configuration
      return;
    }
  }

}
