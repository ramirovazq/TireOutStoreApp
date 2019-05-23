export const loginURI = 'http://192.168.0.4:8000';
//const loginURI = 'http://192.168.20.112:8000';

let accessToken = null;

const Mylogin = {

	simplelogin(usuario, password) {

	      return fetch(`${loginURI}/api/v0/login/`, 
	        { 
	          method: 'POST',
	          headers: {'Content-Type': 'application/json'},                               
	          body: JSON.stringify({
	                                'username': usuario,
	                                'password': password
					})//stringify
	         }).then(
	            response => response.json()
	          ).then(
	            jsonResponse => {
		          return jsonResponse;
	        }
	      ).catch(function(error) {
    			console.log('There has been a problem with your fetch operation: ' + error.message);
    		});

	},//simplelogin

};

export default Mylogin;