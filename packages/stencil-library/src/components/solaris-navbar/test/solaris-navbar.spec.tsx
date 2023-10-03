import { newSpecPage } from '@stencil/core/testing';
import { SolarisNavbar } from '../solaris-navbar';

describe('solaris-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisNavbar],
      html: `<solaris-navbar></solaris-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-navbar>
    `);
  });
});
