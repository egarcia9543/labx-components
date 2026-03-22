import { Component, Host, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'labx-input',
  styleUrl: 'labx-input.css',
  shadow: true,
})
export class LabxInput {
  /** Texto del label flotante */
  @Prop() label: string;

  /** Valor del input */
  @Prop({ mutable: true, reflect: true }) value: string = '';

  /** Type HTML del input */
  @Prop() type: string = 'text';

  /** Deshabilita el input */
  @Prop() disabled: boolean = false;

  /** Mensaje de error */
  @Prop() error: string;

  /** El input tiene foco actualmente */
  @State() focused: boolean = false;

  /** true si el slot icon-left tiene contenido */
  @State() hasIconLeft: boolean = false;

  /** true si el slot icon-right tiene contenido */
  @State() hasIconRight: boolean = false;

  /** Se emite cuando el valor cambia */
  @Event() labxChange: EventEmitter<string>;

  private handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.labxChange.emit(this.value);
  }

  private onSlotChange(side: 'left' | 'right', e: Event) {
    const slot = e.target as HTMLSlotElement;
    const hasContent = slot.assignedNodes().length > 0;
    if (side === 'left') this.hasIconLeft = hasContent;
    else this.hasIconRight = hasContent;
  }

  render() {
    const isFloating = this.focused || this.value?.length > 0;

    return (
      <Host>
        <div
          class={{
            'input-wrapper': true,
            'input-wrapper--focused': this.focused,
            'input-wrapper--error': !!this.error,
            'input-wrapper--disabled': this.disabled,
            'input-wrapper--icon-left': this.hasIconLeft,
            'input-wrapper--icon-right': this.hasIconRight,
          }}
        >
          <span class="input-icon input-icon--left">
            <slot name="icon-left" onSlotchange={(e) => this.onSlotChange('left', e)}></slot>
          </span>

          <input
            class="input"
            type={this.type}
            value={this.value}
            disabled={this.disabled}
            onInput={(e) => this.handleInput(e)}
            onFocus={() => (this.focused = true)}
            onBlur={() => (this.focused = false)}
          />

          {this.label && (
            <label class={{ 'input-label': true, 'input-label--floating': isFloating }}>
              {this.label}
            </label>
          )}

          <span class="input-icon input-icon--right">
            <slot name="icon-right" onSlotchange={(e) => this.onSlotChange('right', e)}></slot>
          </span>
        </div>

        {this.error && <span class="input-error">{this.error}</span>}
      </Host>
    );
  }
}
