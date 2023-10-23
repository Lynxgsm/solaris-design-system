import { newSpecPage } from "@stencil/core/testing";
import { SolarisSkeleton } from "../solaris-skeleton";
describe('solaris-skeleton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisSkeleton],
      html: `<solaris-skeleton></solaris-skeleton>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-skeleton>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-skeleton>
    `);
  });
});
//# sourceMappingURL=solaris-skeleton.spec.js.map
