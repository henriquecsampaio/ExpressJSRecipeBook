# Express.js Recipe Book

This Express.js application, powered by Pug templates and MongoDB with Mongoose, simplifies recipe management. Users can add, view, edit, and delete recipes with ease.

## Features

1. **Express App with Pug Templates:**
   - Create a new Express app incorporating Pug templates for a clean and dynamic user interface.

2. **Mongoose Connection and Recipe Model:**
   - Establish a Mongoose connection to MongoDB.
   - Define a Recipe model with attributes for name, description, difficulty, ingredients (array), and steps (array).

3. **Router and Routes in recipes.js:**
   - Organize routes in a dedicated `recipes.js` file for efficient code structure.

4. **Form for Recipe Data Collection:**
   - Develop a user-friendly form to collect data for a new recipe, with error rendering for validation.

5. **Route for Adding Recipes:**
   - Create a route to add a recipe, validating user input, and returning errors if necessary.

6. **Route for Viewing Recipe Details:**
   - Implement a route with a parameter for recipe ID, rendering a form to display detailed recipe information.

7. **Route for Editing Recipe Details:**
   - Introduce a route with a parameter for recipe ID, providing a form to edit existing recipe details.

8. **Route for Deleting Recipes:**
   - Establish a route with a parameter for recipe ID, incorporating a button with JavaScript functionality for seamless recipe deletion.

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Express App:**
   ```bash
   npm start
   ```

4. **Access the Application:**
   - Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/).

5. **Explore Recipe Management:**
   - Utilize the various routes to add, view, edit, and delete recipes.

