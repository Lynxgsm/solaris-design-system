import { newE2EPage } from '@stencil/core/testing';

describe('solaris-column', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-column></solaris-column>');

    const element = await page.find('solaris-column');
    expect(element).toHaveClass('hydrated');
  });
});
