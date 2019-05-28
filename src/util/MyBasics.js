import {loginURI} from './Mylogin';

const MyBasics = {
	diadehoy() {
	    var x = new Date();
	    var y = x.getFullYear().toString();
	    var m = (x.getMonth() + 1).toString();
	    var d = x.getDate().toString();
	    (d.length == 1) && (d = '0' + d);
	    (m.length == 1) && (m = '0' + m);
	    var yyyymmdd = y + '-' + m + '-' + d;
	    return yyyymmdd;
	},//simplelogin

	generaMovimiento(losprops, datasend) {
	      return fetch(`${loginURI}/api/v0/movimiento/`, {
		      method: 'POST',
		      headers: {
		        'Content-Type': 'application/json',
		        'Authorization': `Token ${losprops.tokenUser}`,
		      },
		      body: JSON.stringify(datasend)//stringify

		    })
		    .then((response) => response.json())
		    .then((responseJson) => {
		        console.log("Respuesta: generar movimiento ......................");
		        console.log(responseJson);
		    })
		    .catch((error) =>{
		      console.log("movimiento NO insertado con exito :( .................");
		      console.error(error);
		    });
	}, //generaMovimiento
};

export default MyBasics;