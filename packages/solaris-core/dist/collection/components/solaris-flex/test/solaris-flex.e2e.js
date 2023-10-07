import { newE2EPage } from "@stencil/core/testing";
describe('solaris-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-flex></solaris-flex>');
    const element = await page.find('solaris-flex');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-flex.e2e.js.map
