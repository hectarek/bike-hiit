import _ from 'lodash';
import "./styles.scss";
import { renderWelcome } from './core/welcome/welcome';
import { renderSetup } from './core/setup/setup';
import { renderWorkout } from './core/workout/workout';

function component() {
    const element = document.createElement('div');
    element.classList.add('bike-hiit-main-container');
    element.innerHTML = renderWelcome();
    return element;
}

document.body.appendChild(component());