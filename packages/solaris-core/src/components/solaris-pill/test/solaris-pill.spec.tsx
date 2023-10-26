import { newSpecPage } from '@stencil/core/testing';
import { SolarisPill } from '../solaris-pill';

describe('solaris-pill', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisPill],
      html: `<solaris-pill></solaris-pill>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-pill>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-pill>
    `);
  });
});
