/**
 * @file welcome/welcome.js
 *
 * @description This is what builds out the welcome screen
 * @author Hector Gonzalez
 */

import { APP_TITLE } from '../utils/constants';

/**
 * @description This is what renders the welcome screen
 * 
 * @author Hector Gonzalez
 * @returns {HTMLElement} welcome
 */
export const renderWelcome = () => {

    const splashImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flarimermusic.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fyawl_welcome-Wide16x9-1024x576.jpg&f=1&nofb=1';

    const welcomeScreenContainer = `
        <div class="bike-hiit-welcome-screen">
			<div class="bike-hiit-title">
				<h1 class="bike-hiit-title-text">${APP_TITLE}</h1>
			</div>
			<div class="bike-hiit-welcome-splash">
				<img class="bike-hiit-welcome-splash-img" src="${splashImage}" alt="Welcome-image">
			</div>
			<div class="bike-hiit-welcome-next">
				<button class="bike-hiit-welcome-next-button">Next</button>
			</div>
			<div class="bike-hiit-welcome-workout">
				<button>Create Workout</button>
			</div>
		</div>
        `;

    return welcomeScreenContainer;
}