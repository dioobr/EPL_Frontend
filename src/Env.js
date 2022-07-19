const Env = {
	BACKEND_URL: "https://backend-api.raketech.com.local/"
};

for(const key in Env){
	if(process.env.hasOwnProperty('REACT_APP_'+key)) Env[key] = process.env['REACT_APP_'+key];
}

export default Env;