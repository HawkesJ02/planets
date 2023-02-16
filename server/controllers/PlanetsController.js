import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController {
  constructor(){
    super('api/planets')
    this.router
      .get('', this.get_planets)
      .get('/:galaxyId', this.get_planets_by_galaxy)
      .post('', this.create_planet)
  }
  async get_planets_by_galaxy(req, res, next) {
   try {
    const galaxyId = req.params.galaxyId
    const get_planets_by_galaxy = await planetsService.get_planets_by_galaxy(galaxyId)
    res.send(get_planets_by_galaxy)
   } catch (error) {
    next(error)
   }
  }
 async  create_planet(req, res, next) {
    try {
      let planet_data = req.body
      let new_planet = await planetsService.create_planet(planet_data)
      return res.send(new_planet)
    } catch (error) {
      next(error)
    }
  }
  async get_planets(req, res, next) {
    try {
      let planets = await planetsService.get_planets()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}