import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";


export class GalaxiesController extends BaseController {
  constructor(){
    super('api/galaxies')
    this.router 
      .post('',this.create_galaxy)
      .get('', this.get_galaxies)
  }
 async create_galaxy(req, res, next) {
    try {
      let galaxy_data = req.body
      let new_galaxy = await galaxiesService.create_galaxy(galaxy_data)
      return res.send(new_galaxy)
    } catch (error) {
      next(error)
    }
  }
 async  get_galaxies(req, res, next) {
   try {
    let galaxies = await galaxiesService.get_galaxies()
    return res.send(galaxies)
   } catch (error) {
    next(error)
   }
  }
}