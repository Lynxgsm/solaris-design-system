import { newSpecPage } from '@stencil/core/testing';
import { SolarisLabel } from '../solaris-label';

describe('solaris-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisLabel],
      html: `<solaris-label></solaris-label>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-label>
    `);
  });
});
