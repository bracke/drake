var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';
const { module, test } = QUnit;
module('Component: drake-app', function (hooks) {
    setupRenderingTest(hooks);
    test('it renders', function (assert) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render(hbs `<drake-app />`);
            assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnQtdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sR0FBRyxNQUFNLDRCQUE0QixDQUFDO0FBRTdDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxVQUFTLEtBQUs7SUFDM0Msa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFlLE1BQU07O1lBQ3RDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUEsZUFBZSxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFDM0UsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBSZW5kZXJpbmdUZXN0IH0gZnJvbSAnQGdsaW1tZXIvdGVzdC1oZWxwZXJzJztcbmltcG9ydCBoYnMgZnJvbSAnQGdsaW1tZXIvaW5saW5lLXByZWNvbXBpbGUnO1xuXG5jb25zdCB7IG1vZHVsZSwgdGVzdCB9ID0gUVVuaXQ7XG5cbm1vZHVsZSgnQ29tcG9uZW50OiBkcmFrZS1hcHAnLCBmdW5jdGlvbihob29rcykge1xuICBzZXR1cFJlbmRlcmluZ1Rlc3QoaG9va3MpO1xuXG4gIHRlc3QoJ2l0IHJlbmRlcnMnLCBhc3luYyBmdW5jdGlvbihhc3NlcnQpIHtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcihoYnNgPGRyYWtlLWFwcCAvPmApO1xuICAgIGFzc2VydC5lcXVhbCh0aGlzLmNvbnRhaW5lckVsZW1lbnQudGV4dENvbnRlbnQsICdXZWxjb21lIHRvIEdsaW1tZXIhXFxuJyk7XG4gIH0pO1xufSk7XG4iXX0=