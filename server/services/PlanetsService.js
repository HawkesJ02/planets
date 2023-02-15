import { dbContext } from "../db/DbContext"


class PlanetsService{
  async get_planets() {
   const planets = await dbContext.Planets.find()
   return planets
  }

}

export const planetsService = new PlanetsService()