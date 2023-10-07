import { newE2EPage } from "@stencil/core/testing";
describe('solaris-stepper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<solaris-stepper></solaris-stepper>');
    const element = await page.find('solaris-stepper');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=solaris-stepper.e2e.js.map
