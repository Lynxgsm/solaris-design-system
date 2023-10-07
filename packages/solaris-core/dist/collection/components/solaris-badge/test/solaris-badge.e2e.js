import { newE2EPage } from "@stencil/core/testing";
describe('solaris-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-badge></solaris-badge>');
    const element = await page.find('solaris-badge');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-badge.e2e.js.map
