import { newE2EPage } from '@stencil/core/testing';

describe('solaris-cards', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-cards></solaris-cards>');

    const element = await page.find('solaris-cards');
    expect(element).toHaveClass('hydrated');
  });
});
