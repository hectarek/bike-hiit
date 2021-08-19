/**
 * @file workout/workout.js
 *
 * @description This is what builds out the workout screen
 * @author Hector Gonzalez
 */

 import { APP_TITLE } from '../utils/constants';

 /**
  * @description This is what renders the welcome screen
  * 
  * @author Hector Gonzalez
  * @returns {HTMLElement} welcome
  */
export const renderWorkout = () => {
    const workoutScreen = `
        <div class="bike-hiit-workout-inprogress">
			<div class="bike-hiit-title">
				<h1 class="bike-hiit-title-text">Cycling HIIT Workout</h1>
			</div>
			<div class="bike-hiit-progress-bar"></div>
			<div class="bike-hiit-middle-assets-container">
				<div class="bike-hiit-effort-meter"></div>
				<div class="bike-hiit-spinner dual-ring" id="bike-hiit-spinner"></div>

				<h2 id="rpm-value">70 Rpm</h2>
				<div>
					<label id="rpm-label" for="rpm-slider">RPM</label>
					<div class="rpm-slider">
						<input type="range" min="20" max="180" value="70" class="slider" id="rpm-slider" />
					</div>
				</div>
				<div class="bike-hiit-timers"></div>
			</div>
			<div class="bike-hiit-start-stop"></div>
		</div>
    `;
    return workoutScreen;
}