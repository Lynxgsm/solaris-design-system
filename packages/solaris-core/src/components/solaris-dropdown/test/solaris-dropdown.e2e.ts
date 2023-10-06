import { newE2EPage } from '@stencil/core/testing';

describe('solaris-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-dropdown></solaris-dropdown>');

    const element = await page.find('solaris-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
