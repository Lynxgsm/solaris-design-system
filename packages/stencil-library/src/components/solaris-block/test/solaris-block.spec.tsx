import { newSpecPage } from '@stencil/core/testing';
import { SolarisBlock } from '../solaris-block';

describe('solaris-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisBlock],
      html: `<solaris-block></solaris-block>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-block>
    `);
  });
});
