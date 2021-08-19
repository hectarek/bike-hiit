/**
 * @file setup/setup.js
 *
 * @description This is what builds out the setup screen
 * @author Hector Gonzalez
 */

 import { APP_TITLE } from '../utils/constants';

 /**
  * @description This is what renders the welcome screen
  * 
  * @author Hector Gonzalez
  * @returns {HTMLElement} welcome
  */
export const renderSetup = () => {

    const setupScreen = `
        <div class="bike-hiit-workout-setup">
			<div class="bike-hiit-title">
				<h1 class="bike-hiit-title-text">Cycling HIIT Workout</h1>
			</div>
			<div class="bike-hiit-basic-input">
				<input type=text list=browsers>
				<datalist id=browsers>
					<option> 30 Mins
					<option> 60 Mins
				</datalist>
			</div>
			<div class="bike-hiit-interval-container">
				<div class="bike-hiit-interval-segment-n"></div>
			</div>
			<div class="bike-hiit-start-workout">
				<button>Start</button>
			</div>
		</div>
    `;

    return setupScreen;
}