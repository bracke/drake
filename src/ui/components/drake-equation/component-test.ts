import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: drake-equation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<drake-equation />`);
    assert.ok(this.containerElement.querySelector('div'));
  });

  test('Default values', async function(assert){

    await this.render(hbs`<drake-equation />`);
assert.ok(this.containerElement.querySelector('div'));
   // assert.equal(find('.planetarySystems').value(), '50');


  });
});
