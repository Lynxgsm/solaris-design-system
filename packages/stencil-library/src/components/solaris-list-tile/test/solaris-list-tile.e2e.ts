import { newE2EPage } from '@stencil/core/testing';

describe('solaris-list-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-list-tile></solaris-list-tile>');

    const element = await page.find('solaris-list-tile');
    expect(element).toHaveClass('hydrated');
  });
});
