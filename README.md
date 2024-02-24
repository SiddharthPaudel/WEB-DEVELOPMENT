# Final-OOP 
<h2>Done by group of Developers (Saidzamonuddin , Ramzi Abdulalishoev, Raul Shodmonbekov)</h2>

Ebook website done by React and SpringBoot 

The project is a web-based eBook management system developed using Spring Boot for the backend and React for the frontend. It provides a platform for users to browse, manage, and access a diverse range of eBooks. Utilizing JWT for secure authentication, the system allows users to sign in and perform actions based on their roles (e.g., readers, administrators). The backend is built with a RESTful architecture, offering various endpoints for user management, eBook cataloging, and transaction processing. The frontend offers a user-friendly interface for seamless interaction with these services.

  ## Available Scripts
  
  In the project directory, you can run:
  
  ### `npm start`
  
  Runs the app in the development mode.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  
  The page will reload if you make edits.<br />
  You will also see any lint errors in the console.

  ### `npm test`
  
  Launches the test runner in the interactive watch mode.<br />
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
  
  ### `npm run build`
  
  Builds the app for production to the `build` folder.<br />
  It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

  


### API Endpoints Documentation
Authentication Endpoints
User Registration

POST /api/auth/register
Registers a new user. Checks for existing email.
Body: User details (UserDto).
User Login

POST /api/auth/login
Authenticates user and returns JWT.
Body: User credentials.
Book Management Endpoints
Create Book

POST /api/book/
Adds a new book entry.
Parameters: BookDto, MultipartFile.
Update Book

POST /api/book/update
Updates an existing book.
Parameters: BookDto, MultipartFile.
Get All Books with Pagination

GET /api/book/books
Retrieves paginated list of books.
Query Parameters: pageNo, pageSize, sortBy, sortDir.
Get All Books

GET /api/book/
Retrieves all books.
Get Book by ID

GET /api/book/{id}
Retrieves a single book.
Path Variable: id.
Delete Book

GET /api/book/delete/{id}
Deletes a book.
Path Variable: id.
Count Books

GET /api/book/count
Returns total book count.
Get All Users

GET /api/book/getUser
Retrieves all users.
Update Profile

POST /api/book/updateProfile
Updates a user profile.
Body: User.
Search Books

GET /api/book/search
Searches books.
Query Parameter: ch.
Book Order Endpoints
Create Order

GET /api/bookOrder/{paymentType}
Creates a new order.
Path Variable: paymentType.
Get Order by User

GET /api/bookOrder/order
Retrieves user's orders.
Get All Orders

GET /api/bookOrder/orders
Retrieves all orders.
Update Order Status

GET /api/bookOrder/updateStatus/{id}/{st}
Updates order status.
Path Variables: id, st.
Cart Management Endpoints
Create Cart

POST /api/cart/
Adds a new cart entry.
Body: CartDto.
Check Cart

POST /api/cart/check
Checks user's cart.
Body: CartDto.
Get All Carts by User

GET /api/cart/
Retrieves user's cart items.
Update Cart Quantity

POST /api/cart/updateQuan/{id}/{quantity}
Updates item quantity.
Path Variables: id, quantity.
Delete Cart Item

GET /api/cart/deleteCart/{id}
Removes cart item.
Path Variable: id.
Category Management Endpoints
Create Category

POST /api/categories/
Creates a new category.
Body: CategoryDto.
Get Category by ID

GET /api/categories/{id}
Retrieves a category.
Path Variable: id.
Get All Categories

GET /api/categories/
Retrieves all categories.
Update Category

PUT /api/categories/{id}
Updates a category.
Path Variable: id.
Body: CategoryDto.
Delete Category

DELETE /api/categories/{id}
Deletes a category.
Path Variable: id.
File Management Endpoint
Download Image File

GET /{imgName}
Serves an image file.
Path Variable: imgName.

## Congratulations!

You now have a spring boot application with a React frontend. During development, you can now run the application
using `React-scripts` by running `cd ebook; npm start`, and you'll have all the benefits of rapid application 
development with hot reloads and everything you might wish for, while being able to deploy the application to test
and production environments as a single artifact. 

Happy hacking!
