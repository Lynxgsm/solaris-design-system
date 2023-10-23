import { newSpecPage } from "@stencil/core/testing";
import { SolarisBadge } from "../solaris-badge";
describe('solaris-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisBadge],
      html: `<solaris-badge></solaris-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-badge>
    `);
  });
});
//# sourceMappingURL=solaris-badge.spec.js.map
