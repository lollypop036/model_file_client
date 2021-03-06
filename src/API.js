
class API {
    static init () {
      this.baseUrl = 'http://localhost:3000/api/v1'
      this.agentUrl = this.baseURL + '/agents/1'
      this.modelsUrl = this.baseURL + '/models'
      this.jobsUrl = this.baseURL + '/jobs'
      this.castingsUrl = this.baseURL + '/castings'
      this.shootsUrl = this.baseURL + '/shoots'

    }
  
    static getAgent () {
      return fetch('http://localhost:3000/api/v1/agents/1')
      .then(res => res.json())
    }


    static getCastings () {
      return fetch('http://localhost:3000/api/v1/castings')
      .then(res => res.json())
    }

    static getShoots () {
      return fetch('http://localhost:3000/api/v1/shoots').then(res => res.json())
    }

    static getModels () {
      return fetch('http://localhost:3000/api/v1/models').then(res => res.json())
    }

    static removeModel (id) {
      return fetch(`http://localhost:3000/api/v1/models/${id}`, {
        method: 'DELETE'
      }).then(resp => resp.json())
    }

    static  parseDate = (date) => {
      const dates = new Date(date)
      return new Intl.DateTimeFormat().format(dates)
    }
    
  


  }
  
  API.init()
  
  export default API