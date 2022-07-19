const Env = {
	BACKEND_URL: "https://api.epl.dioobr.com.local/" //set here the default backend URL
};

//search for environment variables and replace the default value
for(const key in Env){
	if(process.env.hasOwnProperty('REACT_APP_'+key)) Env[key] = process.env['REACT_APP_'+key];
}

export default Env;