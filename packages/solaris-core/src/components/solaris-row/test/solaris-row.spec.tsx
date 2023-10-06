import { newSpecPage } from '@stencil/core/testing';
import { SolarisRow } from '../solaris-row';

describe('solaris-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisRow],
      html: `<solaris-row></solaris-row>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-row>
    `);
  });
});
