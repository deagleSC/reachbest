#### Supratik Chakraborty
#### Reach Best Full Stack Engineer Application 2023

Frontend Deployment: https://reachbest.onrender.com/
Backend Deployment: https://calm-pear-seagull-ring.cyclic.app/

#### Frontend
Tech stack: Next JS, Tailwind, Headless UI, Typescript

*  The Frontend of the project uses Next JS framework with Tailwind as the styling library and Headless UI for styled components.
*  Used Typescript to minimize type related errors by handling them during compile time.
*  The entry point of the Frontend is page.tsx which defines the props data for individual page elements, and components are defined inside the components/ folder.

#### Backend
Tech stack: Node JS, Express, MongoDB, Mongoose, Typescript

* The Backend of the project uses Node JS with Express framework and RESTful APIs.
* The models/ folder contains the schema definitions for User and Book types.
* The routes/ folder contains files to manage routes in a modular manner.
* The controllers/ folder contains the logic implementation for an endpoint and handles database operations.
* The utils/ folder contain common functions such as getBooks() in this case, which handles the logic for book recommendations based on the calculated vector difference.
* The src/index.ts file is the entry point of the Backend and handles imports for dependencies, database connection to MongoDB, configures middlewares, and sets up the server to listen to the specified port.
