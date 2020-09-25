import { newE2EPage } from '@stencil/core/testing';

describe('ds-virtualkeyboard-key', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-virtualkeyboard-key></ds-virtualkeyboard-key>');

    const element = await page.find('ds-virtualkeyboard-key');
    expect(element).toHaveClass('hydrated');
  });
});
