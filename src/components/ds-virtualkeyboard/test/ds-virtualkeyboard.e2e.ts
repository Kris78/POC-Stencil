import { newE2EPage } from '@stencil/core/testing';

describe('ds-virtualkeyboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ds-virtualkeyboard></ds-virtualkeyboard>');

    const element = await page.find('ds-virtualkeyboard');
    expect(element).toHaveClass('hydrated');
  });
});
