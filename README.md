# Books Api

## Introduction
Welcome to the Books API. This API was specifically developed to support the [Bestselling Books](https://github.com/joshuasoave/nyt-bestsellers) app, which showcases New York Times bestselling book data. The primary purpose of this API is to provide access to the top fiction hardcover bestsellers from the New York Times. However, it doesn't stop there; this project is an ongoing effort to enhance the functionality and user experience of the app continuously.

## Purpose and Vision
The core vision of the Books API is to facilitate seamless integration with the Bestselling Books app, ensuring users have access to the most up-to-date and accurate information on the top-selling fiction hardcover books. By leveraging the New York Times API, the Books API acts as a bridge between the user and the vast collection of bestselling books.

## Current Features
At present, the Books API predominantly offers a GET route, which enables the retrieval of valuable data from the New York Times bestselling books API. This endpoint, specifically accessed through the /books/currentFiction route in the Bestselling Books app, allows users to view the top 10 fiction hardcover bestsellers.

## Planned Enhancements
I'm dedicated to consistently improving the functionality of the Books API to provide users with an exceptional experience. In the upcoming update, the following enhancements are planned:

- User Accounts: A comprehensive user management system will be integrated into the API, enabling users to create accounts, log in, and manage their profiles.
- Wishlist Functionality: With the user accounts in place, a create, update, and delete route will be introduced to enable users to save their favorite books to a personalized wishlist.
- Expanded API Capabilities: As the project grows, efforts will be made to increase the number of API calls allowed per minute and per day to accommodate a larger user base and more extensive usage.

## Technology Stack
The Books API is built using the popular and efficient Express framework, which powers the server.js file. This choice of technology ensures a robust and performant backend for the app. Additionally, Jest has been utilized as the testing framework to ensure the reliability and correctness of the API's functionality.

## API Endpoints
Currently, the Books API provides the following endpoint:

### GET /books/currentFiction
This endpoint is responsible for retrieving the top fiction hardcover bestselling books from the New York Times API. When accessed through the Bestselling Books app, it will return the latest results from the New York Times API.

<img width="708" alt="Screen Shot 2023-07-23 at 7 54 01 PM" src="https://github.com/joshuasoave/books-api/assets/62475382/9d23e6d5-bfc5-47a5-9679-17c135653d79">

## Testing
To maintain the high quality of the Books API, a thorough testing process is implemented. The Jest test suite verifies that the response from the API at /books/currentFiction returns a status code of 200 and contains a non-empty array of books in the res.body.results.books property.

<img width="575" alt="Screen Shot 2023-07-23 at 7 57 29 PM" src="https://github.com/joshuasoave/books-api/assets/62475382/caa2b4a4-e361-4a6d-ad6d-fdfe6c883036">

## Conclusion
Thank you for taking the time to explore the Books API! The project is continuously evolving, with exciting updates and enhancements on the horizon. By combining the power of Express, the New York Times API, and a user-focused vision, this API strives to deliver an exceptional experience for book enthusiasts and users of the Bestselling Books app. If you have any feedback or suggestions, feel free to reach out - your input is highly appreciated!
