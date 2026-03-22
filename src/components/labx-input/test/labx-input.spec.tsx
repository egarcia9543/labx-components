import { newSpecPage } from '@stencil/core/testing';
import { LabxInput } from '../labx-input';
import { describe, it, expect } from 'vitest';

describe('labx-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LabxInput],
      html: `<labx-input></labx-input>`,
    });
    expect(page.root).toEqualHtml(`
      <labx-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </labx-input>
    `);
  });
});
