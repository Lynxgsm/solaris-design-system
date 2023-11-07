import { newSpecPage } from '@stencil/core/testing';
import { SolarisBubble } from '../solaris-bubble';

describe('solaris-bubble', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisBubble],
      html: `<solaris-bubble></solaris-bubble>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-bubble>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-bubble>
    `);
  });
});
