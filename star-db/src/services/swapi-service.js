export default class SwapiService {
  // _apiBase = 'https://swapi.dev/api'
  _apiBase = 'https://www.swapi.tech/api/'

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${url}, received ${res.status}`
      )
    }

    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getResourse(`people/`)
    return res.results.map(this._transformPerson)
  }

  async getPerson(id) {
    const person = await this.getResourse(`people/${id}/`)
    return this._transformPerson(person)
  }

  async getAllPlanets() {
    const res = await this.getResourse(`planets/`)
    console.log(res);
    return res.results.map(this._transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getResourse(`planets/${id}/`)
    return this._transformPlanet(planet)
  }

  async getAllStarships() {
    const res = await this.getResourse(`starships/`)
    return res.results.map(this._transformStarship)
  }

  async getStarship(id) {
    const planet = await this.getResourse(`starships/${id}/`)
    return this._transformStarship(planet)
  }

  _extractId(item) {
    // для swapi.dev /\/([0-9]*)\/$/
    const idRegExp = /\/([0-9]*)$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    // Приставка new для swapi.tech
    const planet_new = planet.result.properties
    return {
      id: this._extractId(planet_new),
      name: planet_new.name,
      population: planet_new.population,
      rotationPeriod: planet_new.rotation_period,
      diameter: planet_new.diameter,
    }
  }

  _transformStarship = (starship) => {
    // Приставка new для swapi.tech
    const starship_new = starship.result.properties
    return {
      id: this._extractId(starship_new),
      name: starship_new.name,
      model: starship_new.model,
      manufacturer: starship_new.manufacturer,
      costInCredits: starship_new.costInCredits,
      length: starship_new.length,
      crew: starship_new.crew,
      passengers: starship_new.passengers,
      cargoCapasity: starship_new.cargoCapasity,
    }
  }

  _transformPerson = (person) => {
    // Приставка new для swapi.tech
    const person_new = person.result.properties
    return {
      id: this._extractId(person_new),
      name: person_new.name,
      gender: person_new.gender,
      birthYear: person_new.birthYear,
      eyeColor: person_new.eyeColor,
    }
  }
}
