import 'regenerator-runtime'; /* for async await transpile */
import '../stylesheets/app.css';
import UI from './ui.js';
import logo from '../images/logo.svg';

document.querySelector('.navbar-brand img').src = logo;

UI.renderRestaurantMenu();