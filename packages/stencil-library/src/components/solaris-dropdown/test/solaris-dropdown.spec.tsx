import { newSpecPage } from '@stencil/core/testing';
import { SolarisDropdown } from '../solaris-dropdown';

describe('solaris-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisDropdown],
      html: `<solaris-dropdown></solaris-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-dropdown>
    `);
  });
});
