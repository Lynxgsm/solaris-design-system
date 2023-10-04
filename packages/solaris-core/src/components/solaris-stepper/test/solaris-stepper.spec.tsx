import { newSpecPage } from '@stencil/core/testing';
import { SolarisStepper } from '../solaris-stepper';

describe('solaris-stepper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SolarisStepper],
      html: `<solaris-stepper></solaris-stepper>`,
    });
    expect(page.root).toEqualHtml(`
      <solaris-stepper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </solaris-stepper>
    `);
  });
});
