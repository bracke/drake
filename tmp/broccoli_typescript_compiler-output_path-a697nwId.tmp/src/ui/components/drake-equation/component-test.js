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
module('Component: drake-equation', function (hooks) {
    setupRenderingTest(hooks);
    test('it renders', function (assert) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render(hbs `<drake-equation />`);
            assert.ok(this.containerElement.querySelector('div'));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnQtdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sR0FBRyxNQUFNLDRCQUE0QixDQUFDO0FBRTdDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0FBRS9CLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxVQUFTLEtBQUs7SUFDaEQsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFlLE1BQU07O1lBQ3RDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUEsb0JBQW9CLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cFJlbmRlcmluZ1Rlc3QgfSBmcm9tICdAZ2xpbW1lci90ZXN0LWhlbHBlcnMnO1xuaW1wb3J0IGhicyBmcm9tICdAZ2xpbW1lci9pbmxpbmUtcHJlY29tcGlsZSc7XG5cbmNvbnN0IHsgbW9kdWxlLCB0ZXN0IH0gPSBRVW5pdDtcblxubW9kdWxlKCdDb21wb25lbnQ6IGRyYWtlLWVxdWF0aW9uJywgZnVuY3Rpb24oaG9va3MpIHtcbiAgc2V0dXBSZW5kZXJpbmdUZXN0KGhvb2tzKTtcblxuICB0ZXN0KCdpdCByZW5kZXJzJywgYXN5bmMgZnVuY3Rpb24oYXNzZXJ0KSB7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoaGJzYDxkcmFrZS1lcXVhdGlvbiAvPmApO1xuICAgIGFzc2VydC5vayh0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2JykpO1xuICB9KTtcbn0pO1xuIl19