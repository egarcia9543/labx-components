import { newSpecPage } from '@stencil/core/testing';
import { LabxButton } from '../labx-button';
import { describe, expect, it } from 'vitest';

describe('labx-button', () => {

  it('renderiza el label por defecto', async () => {
    const page = await newSpecPage({
      components: [LabxButton],
      html: `<labx-button></labx-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.textContent).toBe('Button');
  });

  it('aplica la clase de la variante correcta', async () => {
    const page = await newSpecPage({
      components: [LabxButton],
      html: `<labx-button variant="danger"></labx-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.classList.contains('btn--danger')).toBe(true);
  });

  it('deshabilita el botón cuando disabled es true', async () => {
    const page = await newSpecPage({
      components: [LabxButton],
      html: `<labx-button disabled></labx-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('emite el evento labxClick al hacer click', async () => {
    const page = await newSpecPage({
      components: [LabxButton],
      html: `<labx-button></labx-button>`,
    });
    let emitted = false;
    page.root.addEventListener('labxClick', () => (emitted = true));
    page.root.shadowRoot.querySelector('button').click();
    expect(emitted).toBe(true);
  });

});
