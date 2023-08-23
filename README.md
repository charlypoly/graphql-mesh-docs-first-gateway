# GraphQL Mesh Services examples

## Setup

```
yarn install
```

### Build all APIs

```
yarn workspaces run foreach build
```

<p>&nbsp;</p>

## Examples

### Start the single source (Books Gateway) Mesh Gateway

```
yarn run start-single-source
```

More information on https://graphql-mesh.com/docs/getting-started/your-first-mesh-gateway.


<p>&nbsp;</p>


### Start the single source (Books API without definition) Mesh Gateway

```
yarn run start-single-source-no-source-definition
```

More information on https://graphql-mesh.com/docs/getting-started/sources-with-no-definition


<p>&nbsp;</p>

### Start the multiple sources Mesh Gateway

```
yarn run start-multiple-sources
```

More information on https://graphql-mesh.com/docs/getting-started/combine-many-sources.

<p>&nbsp;</p>

### Start the multiple sources Mesh Gateway (with programmatic resolvers)

```
yarn run start-multiple-sources-prog-resolvers
```

More information on https://graphql-mesh.com/docs/guides/extending-unified-schema#extending-the-unified-schema.


<p>&nbsp;</p>

----

<p>&nbsp;</p>

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
- `bookSells(storeId: ID!)` Query
