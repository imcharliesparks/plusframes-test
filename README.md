This is the first pass at a mobile-first app for TOs to better run events utilizing the Start.gg API.

## Getting Started

Install deps with your bundler of choice, I'm using `yarn` here.

Start the application with `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Tech Used
- Authentication - Clerk
- Data Fetching - Apollo Client
- Styles - Tailwindcss

## Data Fetching Patterns

#### Writing Queries
- All queries can be written directly to `.graphql` files, we have Webpack bundling setup with a GQL loader, and should be placed in the `/lib/queries` directory. 

#### API Routes
- To do more traditional server route based data fetching, you need to first set up a new file in the `/pages/api` directory and create a handler method.
- If this API route needs to be protected, make sure to wrap it with the `withAuth` method exposed by Clerk.
- Initialize your GQL client instance using `getClient` and pass it the URI of the GQL endpoint. 
- **NOTE: If you need to hit an endpoint other that start.gg, you need to wire up a new client in the style of `start-apollo-client.ts` and change its consumption in `_app.ts`
- In your route handler, instantiate the graphql client with `getClient` and provide the API endpoint.
- Fetch your data with the client, then send the response off just like you would in a normal API route.
- Hit the route as normal in your component.
- ???
- Profit!

#### SSR Components
- To fetch data in a component hydrated on the server side, export a function called `getServerSideProps` at the end of your component file.
- Inside of that, you basically just follow the exact steps in the API route; however, instead of sending the data off in a response, you return an object in the shape of:

```typescript
{
 props: {
  result: <your-query-result>
 }
}
```