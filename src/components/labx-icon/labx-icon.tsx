import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'labx-icon',
  styleUrl: 'labx-icon.css',
  shadow: true,
})
export class LabxIcon {
  /** Nombre del ícono de Material Symbols (ej: "email", "search", "close") */
  @Prop() name!: string;

  /** Tamaño en px */
  @Prop() size: number = 20;

  /** Filled (true) u Outlined (false) */
  @Prop() filled: boolean = false;

  render() {
    return (
      <Host style={{ fontSize: `${this.size}px` }}>
        <span
          class={{ 'icon': true, 'icon--filled': this.filled }}
        >
          {this.name}
        </span>
      </Host>
    );
  }
}
