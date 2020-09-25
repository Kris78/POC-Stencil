import { newSpecPage } from '@stencil/core/testing';
import { DsVirtualkeyboard } from '../ds-virtualkeyboard';

describe('ds-virtualkeyboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsVirtualkeyboard],
      html: `<ds-virtualkeyboard></ds-virtualkeyboard>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-virtualkeyboard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-virtualkeyboard>
    `);
  });
});
