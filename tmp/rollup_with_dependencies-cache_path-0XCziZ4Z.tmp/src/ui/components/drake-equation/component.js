var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Component, { tracked } from '@glimmer/component';
export default class DrakeEquation extends Component {
    constructor() {
        super(...arguments);
        this.starformation = this.args.starformation || 10;
        this.planetarysystems = this.args.planetarysystems || 50;
        this.planets = this.args.planets || 1;
        this.life = this.args.life || 10;
        this.intelligence = this.args.intelligence || 50;
        this.technology = this.args.technology || 50;
        this.time = this.args.time || 1000;
    }
    get result() {
        return this.starformation *
            (this.planetarysystems / 100) *
            this.planets *
            (this.life / 100) *
            (this.intelligence / 100) *
            (this.technology / 100) *
            this.time;
    }
    updateStarformation(e) {
        this.starformation = e.target.value;
    }
    updatePlanetarysystems(e) {
        this.planetarysystems = e.target.value;
    }
    updatePlanets(e) {
        this.planets = e.target.value;
    }
    updateLife(e) {
        this.life = e.target.value;
    }
    updateIntelligence(e) {
        this.intelligence = e.target.value;
    }
    updateTechnology(e) {
        this.technology = e.target.value;
    }
    updateTime(e) {
        this.time = e.target.value;
    }
}
__decorate([
    tracked
], DrakeEquation.prototype, "starformation", void 0);
__decorate([
    tracked
], DrakeEquation.prototype, "planetarysystems", void 0);
__decorate([
    tracked
], DrakeEquation.prototype, "planets", void 0);
__decorate([
    tracked
], DrakeEquation.prototype, "life", void 0);
__decorate([
    tracked
], DrakeEquation.prototype, "intelligence", void 0);
__decorate([
    tracked
], DrakeEquation.prototype, "technology", void 0);
__decorate([
    tracked
], DrakeEquation.prototype, "time", void 0);
__decorate([
    tracked('starformation', 'planetarysystems', 'planets', 'life', 'intelligence', 'technology', 'time')
], DrakeEquation.prototype, "result", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sU0FBUyxFQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsTUFBTSxDQUFDLE9BQU8sb0JBQXFCLFNBQVEsU0FBUztJQUFwRDs7UUFFVSxrQkFBYSxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFNLEVBQUUsQ0FBQztRQUNsRCxxQkFBZ0IsR0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFLLEVBQUUsQ0FBQztRQUN0RCxZQUFPLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQU8sQ0FBQyxDQUFDO1FBQ3ZDLFNBQUksR0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBUSxFQUFFLENBQUM7UUFDcEMsaUJBQVksR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBTSxFQUFFLENBQUM7UUFDaEQsZUFBVSxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFPLEVBQUUsQ0FBQztRQUM3QyxTQUFJLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQVEsSUFBSSxDQUFDO0lBeUNoRCxDQUFDO0lBdENBLElBQUksTUFBTTtRQUVULE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN2QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU87WUFDWixDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDekIsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNELG1CQUFtQixDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0JBQXNCLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxDQUFDO1FBRWQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNELGdCQUFnQixDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Q0FDRDtBQS9DUztJQUFSLE9BQU87b0RBQW1EO0FBQ2xEO0lBQVIsT0FBTzt1REFBdUQ7QUFDdEQ7SUFBUixPQUFPOzhDQUF3QztBQUN2QztJQUFSLE9BQU87MkNBQXFDO0FBQ3BDO0lBQVIsT0FBTzttREFBaUQ7QUFDaEQ7SUFBUixPQUFPO2lEQUE4QztBQUM3QztJQUFSLE9BQU87MkNBQXVDO0FBRy9DO0lBREMsT0FBTyxDQUFDLGVBQWUsRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLGNBQWMsRUFBQyxZQUFZLEVBQUMsTUFBTSxDQUFDOzJDQVVoRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQseyB0cmFja2VkIH0gZnJvbSAnQGdsaW1tZXIvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJha2VFcXVhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0QHRyYWNrZWQgc3RhcmZvcm1hdGlvbiBcdFx0PSB0aGlzLmFyZ3Muc3RhcmZvcm1hdGlvbiBcdFx0fHwgMTA7XG5cdEB0cmFja2VkIHBsYW5ldGFyeXN5c3RlbXMgXHQ9IHRoaXMuYXJncy5wbGFuZXRhcnlzeXN0ZW1zIFx0fHwgNTA7XG5cdEB0cmFja2VkIHBsYW5ldHMgXHRcdFx0PSB0aGlzLmFyZ3MucGxhbmV0cyBcdFx0XHR8fCAxO1xuXHRAdHJhY2tlZCBsaWZlIFx0XHRcdFx0PSB0aGlzLmFyZ3MubGlmZSBcdFx0XHRcdHx8IDEwO1xuXHRAdHJhY2tlZCBpbnRlbGxpZ2VuY2UgXHRcdD0gdGhpcy5hcmdzLmludGVsbGlnZW5jZSBcdFx0fHwgNTA7XG5cdEB0cmFja2VkIHRlY2hub2xvZ3kgXHRcdD0gdGhpcy5hcmdzLnRlY2hub2xvZ3kgXHRcdFx0fHwgNTA7XG5cdEB0cmFja2VkIHRpbWUgXHRcdFx0XHQ9IHRoaXMuYXJncy50aW1lIFx0XHRcdFx0fHwgMTAwMDtcblxuXHRAdHJhY2tlZCgnc3RhcmZvcm1hdGlvbicsJ3BsYW5ldGFyeXN5c3RlbXMnLCdwbGFuZXRzJywgJ2xpZmUnLCdpbnRlbGxpZ2VuY2UnLCd0ZWNobm9sb2d5JywndGltZScpXG5cdGdldCByZXN1bHQoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcmZvcm1hdGlvbiAqIFxuXHRcdFx0XHQodGhpcy5wbGFuZXRhcnlzeXN0ZW1zIC8gMTAwKSAqXG5cdFx0XHRcdHRoaXMucGxhbmV0cyAqXG5cdFx0XHRcdCh0aGlzLmxpZmUgLyAxMDApICpcblx0XHRcdFx0KHRoaXMuaW50ZWxsaWdlbmNlIC8gMTAwKSAqXG5cdFx0XHRcdCh0aGlzLnRlY2hub2xvZ3kgLyAxMDApICpcblx0XHRcdFx0dGhpcy50aW1lO1xuXHR9XG5cdHVwZGF0ZVN0YXJmb3JtYXRpb24oZSl7XG5cblx0XHR0aGlzLnN0YXJmb3JtYXRpb24gPSBlLnRhcmdldC52YWx1ZTtcblx0fVxuXHR1cGRhdGVQbGFuZXRhcnlzeXN0ZW1zKGUpe1xuXG5cdFx0dGhpcy5wbGFuZXRhcnlzeXN0ZW1zID0gZS50YXJnZXQudmFsdWU7XG5cdH1cblx0dXBkYXRlUGxhbmV0cyhlKXtcblxuXHRcdHRoaXMucGxhbmV0cyA9IGUudGFyZ2V0LnZhbHVlO1xuXHR9XG5cdHVwZGF0ZUxpZmUoZSl7XG5cblx0XHR0aGlzLmxpZmUgPSBlLnRhcmdldC52YWx1ZTtcblx0fVxuXHR1cGRhdGVJbnRlbGxpZ2VuY2UoZSl7XG5cblx0XHR0aGlzLmludGVsbGlnZW5jZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHR9XG5cdHVwZGF0ZVRlY2hub2xvZ3koZSl7XG5cblx0XHR0aGlzLnRlY2hub2xvZ3kgPSBlLnRhcmdldC52YWx1ZTtcblx0fVxuXHR1cGRhdGVUaW1lKGUpe1xuXG5cdFx0dGhpcy50aW1lID0gZS50YXJnZXQudmFsdWU7XG5cdH1cbn0iXX0=