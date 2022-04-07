import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  Book: {
    author: {
      selectionSet: /* GraphQL */`
      {
        authorId
      }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Authors.Query.authors_v1_AuthorsService_GetAuthor({
          root,
          args: {
            input: {
              id: root.authorId,
            }
          },
          context,
          info,
        })
      }
    }
  },
  Store: {
    bookSells: {
      selectionSet: /* GraphQL */`
      {
        id
      }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Stores.Query.bookSells({
          root,
          args: {
            storeId: root.id
          },
          context,
          info
        })
      }
    }
  },
  Sells: {
    book: {
      selectionSet: /* GraphQL */`
      {
        bookId
      }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Books.Query.book({
          root,
          args: {
            id: root.bookId
          },
          context,
          info
        })
      }
    }
  }
}

export default resolvers
