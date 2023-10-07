import { newE2EPage } from "@stencil/core/testing";
describe('solaris-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-row></solaris-row>');
    const element = await page.find('solaris-row');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-row.e2e.js.map
