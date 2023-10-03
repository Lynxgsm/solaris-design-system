import { newE2EPage } from '@stencil/core/testing';

describe('solaris-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-card></solaris-card>');

    const element = await page.find('solaris-card');
    expect(element).toHaveClass('hydrated');
  });
});
