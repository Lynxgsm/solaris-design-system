import { newSpecPage } from '@stencil/core/testing';
import { SolarisTypography } from '../solaris-typography';

describe('solaris-typography', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisTypography],
      html: `<solaris-typography></solaris-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-typography>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-typography>
    `);
  });
});
