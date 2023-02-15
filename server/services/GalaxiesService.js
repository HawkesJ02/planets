import { dbContext } from "../db/DbContext.js";

class GalaxiesService{
  async create_galaxy(galaxy_data) {
    const new_galaxy = await dbContext.Galaxies.create(galaxy_data)
    return new_galaxy
  }
  async get_galaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

}

export const galaxiesService = new GalaxiesService()