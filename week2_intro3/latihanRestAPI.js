const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users')

fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    for (let index = 0; index < json.length; index++) {
        console.log(json[index].name);
    }
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
  });
