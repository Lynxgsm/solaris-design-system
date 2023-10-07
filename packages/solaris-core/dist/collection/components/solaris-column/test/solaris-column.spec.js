import { newSpecPage } from "@stencil/core/testing";
import { SolarisColumn } from "../solaris-column";
describe('solaris-column', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisColumn],
      html: `<solaris-column></solaris-column>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-column>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-column>
    `);
  });
});
//# sourceMappingURL=solaris-column.spec.js.map
