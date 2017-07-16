import Component,{ tracked } from '@glimmer/component';

export default class DrakeEquation extends Component {

	@tracked starformation 		= this.args.starformation 		|| 10;
	@tracked planetarysystems 	= this.args.planetarysystems 	|| 50;
	@tracked planets 			= this.args.planets 			|| 1;
	@tracked life 				= this.args.life 				|| 10;
	@tracked intelligence 		= this.args.intelligence 		|| 50;
	@tracked technology 		= this.args.technology 			|| 50;
	@tracked time 				= this.args.time 				|| 1000;

	@tracked('starformation','planetarysystems','planets', 'life','intelligence','technology','time')
	get result()
	{
		return this.starformation * 
				(this.planetarysystems / 100) *
				this.planets *
				(this.life / 100) *
				(this.intelligence / 100) *
				(this.technology / 100) *
				this.time;
	}
	updateStarformation(e){

		this.starformation = e.target.value;
	}
	updatePlanetarysystems(e){

		this.planetarysystems = e.target.value;
	}
	updatePlanets(e){

		this.planets = e.target.value;
	}
	updateLife(e){

		this.life = e.target.value;
	}
	updateIntelligence(e){

		this.intelligence = e.target.value;
	}
	updateTechnology(e){

		this.technology = e.target.value;
	}
	updateTime(e){

		this.time = e.target.value;
	}
}