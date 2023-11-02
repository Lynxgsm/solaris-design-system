import { newSpecPage } from '@stencil/core/testing';
import { SolarisTabs } from '../solaris-tabs';

describe('solaris-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisTabs],
      html: `<solaris-tabs></solaris-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-tabs>
    `);
  });
});
