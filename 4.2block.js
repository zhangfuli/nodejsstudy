function sleep(milliseconds){
	var start = new Date().getTime();
	while ((new Date().getTime()-start)<milliseconds){

	}
}

function fetchPage(){
	console.log('fetching api');
	sleep(2000);  //simulate time to fetch a web page
	console.log('Data returned from requesting page');
}

function fetchApi(){
	console.log('fetching api');
	sleep(2000); //simulate time to fetch an api
	console.log('Data returned from the api');
}

fetchPage();
fetchApi();