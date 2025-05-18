import {API_BASE_URL} from "./api.js";

fetch(API_BASE_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err));




