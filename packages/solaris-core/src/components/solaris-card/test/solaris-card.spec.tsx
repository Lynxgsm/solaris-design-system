import { newSpecPage } from '@stencil/core/testing';
import { SolarisCard } from '../solaris-card';

describe('solaris-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisCard],
      html: `<solaris-card></solaris-card>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-card>
    `);
  });
});
