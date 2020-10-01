"VideoChattingApplication" Coding Challenge
===========================================

### A Video Conference Web Application Design Challenge using Vonage's OpenTok API.

## Brief
Design a Video Conference Web Application using OpenTok either as a Full Stack or Front End Developer. <br/>

Run Instructions
----------------
**Run Option 1**
Ensure that the build folder is in the server folder, then:
1. `cd server && npm start` - navigate to server and run

**Run Option 2**
If the build folder isn't in the server folder, then:
1. `cd client && npm run build` - navigate to client and create build folder
2. Copy and Paste the build folder in Client into Server.
3. `cd server && npm start` - navigate back to server (from root directory) and run

**Run Option 3**
If you don't want to create a build folder:
1. `cd client && npm start`
2. Open a new terminal window
3. `cd server && npm start` or `cd server && node server.js`

## Tech Stack
**Front End**
- React
- React Router
- Material-UI
- react-opentok

**Back End**
- Express
- opentok

## Improvements to make
- Introduce Cookies in Client/Server communication
- Design better theme earlier in the project, to reduce time wastage (using Material-UI theme library)
- Create more shared components (i.e. navbar buttons)
- Focus on either Full Stack or Front End, not both (for short term projects)
- Spend more time on the API, and less time on that around the API.

## Personal
I addressed this issue as a Front End Developer, trying to find new and creative ways to display the information that I needed to on the webpage. Unfortunately, I feel like I focused more on the webpage, and less on the Design Brief of creating a interface for OpenTok. For Future reference, I should work on the less fine details surrounding the API first, and then proceed with the finer UI details later on.

## Takeaways
OpenTok was fun to work with as an API, and I would like to create more custom projects with other APIs to get a better hang of creating projects around APIs. I need to better refine my understanding of the APIs I work with, to better manage my time, but overall was a fun mini-project!
