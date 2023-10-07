import { newE2EPage } from "@stencil/core/testing";
describe('solaris-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-typography></solaris-typography>');
    const element = await page.find('solaris-typography');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-typography.e2e.js.map
