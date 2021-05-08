import 'regenerator-runtime'; /* for async await transpile */
import '../stylesheets/app.css';
import data from '../data.json';

const renderTemplate = (data) => {
  const { id, name, pictureId } = data;
  return `<div id="${id}" class="card">
    <img class="card-img" src="${pictureId}">
    <div class="card-body">${name}</div>
  </div>`;
}

let result = '';

for(const key in data.restaurants) {
  result += renderTemplate(data.restaurants[key])
}

document.getElementById('restaurant-menu').innerHTML = result;