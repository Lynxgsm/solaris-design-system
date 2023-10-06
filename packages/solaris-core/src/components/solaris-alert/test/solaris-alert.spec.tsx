import { newSpecPage } from '@stencil/core/testing';
import { SolarisAlert } from '../solaris-alert';

describe('solaris-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisAlert],
      html: `<solaris-alert></solaris-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-alert>
    `);
  });
});
