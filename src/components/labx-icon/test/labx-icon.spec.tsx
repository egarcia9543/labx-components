import { newSpecPage } from '@stencil/core/testing';
import { LabxIcon } from '../labx-icon';
import { describe, it, expect } from 'vitest';

describe('labx-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LabxIcon],
      html: `<labx-icon></labx-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <labx-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </labx-icon>
    `);
  });
});
