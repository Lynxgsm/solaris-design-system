import { newE2EPage } from '@stencil/core/testing';

describe('solaris-skeleton', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-skeleton></solaris-skeleton>');

    const element = await page.find('solaris-skeleton');
    expect(element).toHaveClass('hydrated');
  });
});
