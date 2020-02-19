# plant-calendar
### Authentication
Authentication is farmed out to Google, using `express-session` and `passport`'s google strategy.  It works thusly:
1. user navigates to `/login`, which is just a React route with a button linking to `/auth/google`.  