const axios = require('axios');

export function getDatos (usuario){
  return axios.get('https://basededatos-2127f.firebaseio.com/usuarios/'+usuario+'/password.json')
}

export function getProductos (){
  return axios.get('https://basededatos-2127f.firebaseio.com/productos/.json')
}

export function updateCantidad (index,cantidad){
  axios.patch("https://basededatos-2127f.firebaseio.com/productos/"+index+"/.json",
  {
    "unidades" : cantidad
  })
}

//export {getDatos, getProdutos};
