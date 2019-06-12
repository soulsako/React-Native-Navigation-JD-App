import axios from 'axios'

const config  = {

  dev: 'https://4amqv0pbp0.execute-api.us-east-1.amazonaws.com/dev/myJdBrands', 
  prod: 'https://4amqv0pbp0.execute-api.us-east-1.amazonaws.com/prod/myJdBrands'

};

export default {
  // Returns an array of navigation tabs for brands page
  getTabOne: () => {
    return axios.get(config.dev)
    .then(res => res.tabs[0])
  },

  getTabTwo: () => {
    return axios.get(config.dev)
    .then(res => res.tabs[1])
  },

  getTabThree: () => {
    return axios.get(config.dev)
    .then(res => res.tabs[2])
  }

}


