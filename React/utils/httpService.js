const axios = require('axios');

export function getDatos (usuario){
  return axios.get('https://basededatos-2127f.firebaseio.com/usuarios/'+usuario+'/password.json')
}
