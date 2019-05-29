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
	        .then(response => {
	            if (!response.ok) {
	                throw new Error("Falla, respuesta HTTP Codigo " + response.status);
	            }
	            return response;
	        })
		    .then((result) => result.json())
		    .then((responseJson) => {
		        return responseJson;
		    })
		    .catch((error) =>{
				return {"error": "Error en la peticion de movimiento :("};
		     });
	}, //generaMovimiento

	generaVale(losprops) {
	   	  return fetch(`${loginURI}/api/v0/vale/`, {
		      method: 'POST',
		      headers: {
		        'Content-Type': 'application/json',
		        'Authorization': `Token ${losprops.tokenUser}`,
		      },
		      body: JSON.stringify({
		        "observaciones_grales": "",
		        "fecha_vale": MyBasics.diadehoy(),
		        "tipo_movimiento": "2",//movimiento salida harcoded
		        "persona_asociada": losprops.currentUser,
		        "creador_vale": losprops.currentUser
		      })//stringify
		    })
	        .then(response => {
	            if (!response.ok) {
	                throw new Error("Falla, respuesta HTTP Codigo " + response.status);
	            }
	            return response;
	        })
		    .then((result) => result.json())
		    .then((responseJson) => {
		    		return responseJson;
		    })
		    .catch((error) =>{
		      return {"error": "Error en la peticion de vale :("};
		    });
	}, //generaVale

};

export default MyBasics;