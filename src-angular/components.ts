/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'labx-components/components';

import { defineCustomElement as defineLabxButton } from 'labx-components/components/labx-button.js';
import { defineCustomElement as defineLabxIcon } from 'labx-components/components/labx-icon.js';
import { defineCustomElement as defineLabxInput } from 'labx-components/components/labx-input.js';
@ProxyCmp({
  defineCustomElementFn: defineLabxButton,
  inputs: ['disabled', 'label', 'type', 'variant']
})
@Component({
  standalone: true,
  selector: 'labx-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'type', 'variant'],
  outputs: ['labxClick'],
})
export class LabxButton {
  protected el: HTMLLabxButtonElement;
  @Output() labxClick = new EventEmitter<CustomEvent<void>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LabxButton extends Components.LabxButton {
  /**
   * Se emite cuando el botón es clickeado
   */
  labxClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  defineCustomElementFn: defineLabxIcon,
  inputs: ['filled', 'name', 'size']
})
@Component({
  standalone: true,
  selector: 'labx-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['filled', { name: 'name', required: true }, 'size'],
})
export class LabxIcon {
  protected el: HTMLLabxIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LabxIcon extends Components.LabxIcon {}


@ProxyCmp({
  defineCustomElementFn: defineLabxInput,
  inputs: ['disabled', 'error', 'label', 'type', 'value']
})
@Component({
  standalone: true,
  selector: 'labx-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'label', 'type', 'value'],
  outputs: ['labxChange'],
})
export class LabxInput {
  protected el: HTMLLabxInputElement;
  @Output() labxChange = new EventEmitter<CustomEvent<string>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LabxInput extends Components.LabxInput {
  /**
   * Se emite cuando el valor cambia
   */
  labxChange: EventEmitter<CustomEvent<string>>;
}


