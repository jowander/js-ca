const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(params);

