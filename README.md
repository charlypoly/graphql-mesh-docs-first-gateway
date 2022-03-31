# GraphQL Mesh Services examples

## Getting started


### Build all APIs

```
yarn workspaces run build
```

### Start the single source (Books Gateway) Mesh Gateway

```
yarn run start-single-source
```

More information on https://graphql-mesh.com/docs/getting-started/your-first-mesh-gateway.


<p>&nbsp;</p>

### Start the multiple sources Mesh Gateway

```
yarn run start-multiple-sources
```

More information on https://graphql-mesh.com/docs/howtos/combine-many-sources.

----

## Services

### Books API (OpenAPI)
- `GET /books`
- `GET /books/:id`
- `GET /books/categories`


### Authors API (gRPC)
- `GetAuthor`
- `ListAuthors`

### Stores (GraphQL)
- `stores` Query
- `bookSells` Query
