import { newSpecPage } from '@stencil/core/testing';
import { SolarisFlex } from '../solaris-flex';

describe('solaris-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisFlex],
      html: `<solaris-flex></solaris-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-flex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-flex>
    `);
  });
});
