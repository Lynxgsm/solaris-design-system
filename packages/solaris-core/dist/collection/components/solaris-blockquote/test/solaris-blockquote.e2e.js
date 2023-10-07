import { newE2EPage } from "@stencil/core/testing";
describe('solaris-blockquote', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-blockquote></solaris-blockquote>');
    const element = await page.find('solaris-blockquote');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-blockquote.e2e.js.map
