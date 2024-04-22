**Movie Ticket Booking Application Readme**

**Overview:**
This web application allows users to browse and purchase movie tickets online. It provides a user-friendly interface to view available movies, their details, and purchase tickets. The application is built using HTML, CSS, and JavaScript, leveraging the Fetch API to communicate with a backend server that hosts movie data in JSON format. Additionally, it utilizes a JSON server to simulate a backend environment during development.

**Features:**
1. **Display Movie List:** Upon launching the application, users are presented with a list of available movies fetched from the backend server.
2. **View Movie Details:** Users can click on any movie from the list to view its details, including the movie poster, title, runtime, showtime, and a brief description.
3. **Purchase Tickets:** The application allows users to buy tickets for a selected movie. It dynamically updates the available ticket count based on the tickets sold.

**File Structure:**
- **index.html:** Contains the main structure of the web page.
- **styles.css:** Provides styles for the user interface elements.
- **script.js:** Manages the application logic, including fetching movie data, rendering movie list and details, and updating ticket information.

**Dependencies:**
- **Fetch API:** Used for making HTTP requests to the backend server to fetch movie data.
- **JSON Server:** Simulates a backend server environment during development. It serves movie data from a JSON file and responds to HTTP requests.

**Usage:**
1. **Clone the Repository:** Clone the repository to your local machine using Git.
2. **Install Dependencies:**
   - Ensure you have Node.js installed on your machine.
   - Install JSON Server globally by running `npm install -g json-server`.
3. **Launch JSON Server:** Navigate to the project directory in your terminal and run the following command:
   ```
   json-server --watch db.json --port 3000
   ```
   This command starts the JSON server, which will serve movie data from the `db.json` file on port 3000.
4. **Open Application:** Open the `index.html` file in a web browser to launch the application.
5. **Interact with the Application:** Browse through the list of movies, view movie details, and purchase tickets as desired.

**Contributing:**
Contributions to this project are welcome. Fork the repository, make your changes, and submit a pull request for review.

**Credits:**
- This application is created by [Brian Ngetich].

**License:**
This project is licensed under [Moringa School]. See the LICENSE file for more details.

