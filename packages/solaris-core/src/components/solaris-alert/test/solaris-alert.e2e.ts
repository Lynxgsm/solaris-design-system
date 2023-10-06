import { newE2EPage } from '@stencil/core/testing';

describe('solaris-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-alert></solaris-alert>');

    const element = await page.find('solaris-alert');
    expect(element).toHaveClass('hydrated');
  });
});
