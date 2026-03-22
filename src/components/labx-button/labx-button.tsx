import { Component, Host, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'labx-button',
  styleUrl: 'labx-button.css',
  shadow: true,
})
export class LabxButton {
  /** Texto del botón */
  @Prop() label: string = 'Button';

  /** Estilo visual: primary | secondary | danger */
  @Prop() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  /** Deshabilita el botón */
  @Prop() disabled: boolean = false;

  /** Tipo HTML del botón */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /** Se emite cuando el botón es clickeado */
  @Event() labxClick: EventEmitter<void>;

  private handleClick() {
    if (!this.disabled) {
      this.labxClick.emit();
    }
  }

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          class={`btn btn--${this.variant}`}
          onClick={() => this.handleClick()}
        >
          {this.label}
        </button>
      </Host>
    );
  }
}
