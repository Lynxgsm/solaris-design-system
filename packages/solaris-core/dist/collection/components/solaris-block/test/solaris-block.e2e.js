import { newE2EPage } from "@stencil/core/testing";
describe('solaris-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-block></solaris-block>');
    const element = await page.find('solaris-block');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-block.e2e.js.map
