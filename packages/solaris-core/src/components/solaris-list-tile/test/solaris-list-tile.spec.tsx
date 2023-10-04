import { newSpecPage } from '@stencil/core/testing';
import { SolarisListTile } from '../solaris-list-tile';

describe('solaris-list-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisListTile],
      html: `<solaris-list-tile></solaris-list-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-list-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-list-tile>
    `);
  });
});
