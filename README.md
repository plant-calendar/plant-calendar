# plant-calendar
### Authentication
Authentication is farmed out to Google, using `express-session` and `passport`'s google strategy.  It works thusly:
1. User navigates to `/login`, which is just a React route with a button linking to `/auth/google`.  Navigating to any page in the app, including `/login`, creates an `express-session` which is stored in a `sessions` directory under a uuid, which is also saved as a cookie on the user's machine.
2. Hitting `/auth/google` sends the user to Google, at which point they select an account to authorize the app to use.
3. After an account is selected, google sends the user info to `/auth/google/callback`.  The data that Google provides to this endpoint include a google user id.  Our app either fetches an existing user for this id or creates a new user for it.  It then saves the db id along with the google id to the `session` file.
4. If this was the user's first time logging into PlantCalendar (determined by whether or not the user has a name in the db), the app redirects them to a page to make a profile.  Otherwise, it redirects them to their home page.

The `/graphql` endpoint throws a `401` if a session without a `userId` tries to access it.  Additionally, some of the graphql schema's use information about the user obtained from the session to limit access.  For example, before accessing the schema, the app adds the user's subscribed habitats to the `context` object of the schema.  This is used to permit a user to see only the plants of their subscribed habitats (the reason for this is an IRL security concern, albeit a possibly far-fetched one: a would-be burglar could use info about when you last watered a plant to see that you're on vacation).

For UX experience, React Router redirects to the login page if the `/have-user` endpoint returns `false`.