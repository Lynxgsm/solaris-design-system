import { newSpecPage } from '@stencil/core/testing';
import { SolarisCards } from '../solaris-cards';

describe('solaris-cards', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisCards],
      html: `<solaris-cards></solaris-cards>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-cards>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-cards>
    `);
  });
});
