import { dbContext } from "../db/DbContext"


class PlanetsService{
 async  get_planets_by_galaxy(galaxyId) {
    const planets_by_galaxy = await dbContext.Planets.find({galaxyId})
      .populate('galaxy', 'name')
    return planets_by_galaxy
  }
 async create_planet(planet_data) {
    const new_planet = await dbContext.Planets.create(planet_data)
    return new_planet
  }
  async get_planets() {
   const planets = await dbContext.Planets.find()
   return planets
  }

}

export const planetsService = new PlanetsService()