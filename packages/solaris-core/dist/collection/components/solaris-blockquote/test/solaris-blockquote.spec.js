import { newSpecPage } from "@stencil/core/testing";
import { SolarisBlockquote } from "../solaris-blockquote";
describe('solaris-blockquote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisBlockquote],
      html: `<solaris-blockquote></solaris-blockquote>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-blockquote>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-blockquote>
    `);
  });
});
//# sourceMappingURL=solaris-blockquote.spec.js.map
