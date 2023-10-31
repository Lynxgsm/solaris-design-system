import { newSpecPage } from '@stencil/core/testing';
import { SolarisStatusText } from '../solaris-status-text';

describe('solaris-status-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisStatusText],
      html: `<solaris-status-text></solaris-status-text>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-status-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-status-text>
    `);
  });
});
