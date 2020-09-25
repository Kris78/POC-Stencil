import { newSpecPage } from '@stencil/core/testing';
import { DsVirtualkeyboardKey } from '../ds-virtualkeyboard-key';

describe('ds-virtualkeyboard-key', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsVirtualkeyboardKey],
      html: `<ds-virtualkeyboard-key></ds-virtualkeyboard-key>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-virtualkeyboard-key>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ds-virtualkeyboard-key>
    `);
  });
});
