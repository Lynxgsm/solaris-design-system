import { newE2EPage } from '@stencil/core/testing';

describe('solaris-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-navbar></solaris-navbar>');

    const element = await page.find('solaris-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
