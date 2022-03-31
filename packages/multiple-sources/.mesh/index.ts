// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  Int: number;
  Float: number;
  authors_v1_ListAuthorsRequest_Input: any;
};

export type Query = {
  stores: Array<Store>;
};

export type Book = {
  authorId: Scalars['String'];
  categorieId: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
  author?: Maybe<authors_v1_Author>;
};

export type Category = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type authors_v1_Author = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  editor?: Maybe<Scalars['String']>;
};

export type authors_v1_GetAuthorRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type authors_v1_ListAuthorsResponse = {
  items?: Maybe<Array<Maybe<authors_v1_Author>>>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type Store = {
  id: Scalars['ID'];
  name: Scalars['String'];
  location: Scalars['String'];
  bookSells: Array<Sells>;
};

export type Sells = {
  bookId: Scalars['ID'];
  sellsCount: Scalars['Int'];
  monthYear?: Maybe<Scalars['String']>;
  storeId: Scalars['ID'];
  book?: Maybe<Book>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Book: ResolverTypeWrapper<Book>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Category: ResolverTypeWrapper<Category>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  authors_v1_Author: ResolverTypeWrapper<authors_v1_Author>;
  authors_v1_GetAuthorRequest_Input: authors_v1_GetAuthorRequest_Input;
  authors_v1_ListAuthorsResponse: ResolverTypeWrapper<authors_v1_ListAuthorsResponse>;
  authors_v1_ListAuthorsRequest_Input: ResolverTypeWrapper<Scalars['authors_v1_ListAuthorsRequest_Input']>;
  ConnectivityState: ConnectivityState;
  Store: ResolverTypeWrapper<Store>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Sells: ResolverTypeWrapper<Sells>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Book: Book;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Category: Category;
  Boolean: Scalars['Boolean'];
  authors_v1_Author: authors_v1_Author;
  authors_v1_GetAuthorRequest_Input: authors_v1_GetAuthorRequest_Input;
  authors_v1_ListAuthorsResponse: authors_v1_ListAuthorsResponse;
  authors_v1_ListAuthorsRequest_Input: Scalars['authors_v1_ListAuthorsRequest_Input'];
  Store: Store;
  ID: Scalars['ID'];
  Sells: Sells;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  stores?: Resolver<Array<ResolversTypes['Store']>, ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categorieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['authors_v1_Author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type authors_v1_AuthorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['authors_v1_Author'] = ResolversParentTypes['authors_v1_Author']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type authors_v1_ListAuthorsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['authors_v1_ListAuthorsResponse'] = ResolversParentTypes['authors_v1_ListAuthorsResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['authors_v1_Author']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface authors_v1_ListAuthorsRequest_InputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['authors_v1_ListAuthorsRequest_Input'], any> {
  name: 'authors_v1_ListAuthorsRequest_Input';
}

export type ConnectivityStateResolvers = { IDLE: 'undefined', CONNECTING: 1, READY: 2, TRANSIENT_FAILURE: 3, SHUTDOWN: 4 };

export type StoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookSells?: Resolver<Array<ResolversTypes['Sells']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SellsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Sells'] = ResolversParentTypes['Sells']> = ResolversObject<{
  bookId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sellsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  monthYear?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  storeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  authors_v1_Author?: authors_v1_AuthorResolvers<ContextType>;
  authors_v1_ListAuthorsResponse?: authors_v1_ListAuthorsResponseResolvers<ContextType>;
  authors_v1_ListAuthorsRequest_Input?: GraphQLScalarType;
  ConnectivityState?: ConnectivityStateResolvers;
  Store?: StoreResolvers<ContextType>;
  Sells?: SellsResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace BooksTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /books/{id}
   */
  book?: Maybe<Book>;
  /**
   *
   *
   * Equivalent to GET /books
   */
  books?: Maybe<Array<Maybe<Book>>>;
  /**
   *
   *
   * Equivalent to GET /categories
   */
  categories?: Maybe<Array<Maybe<Category>>>;
};


export type QuerybookArgs = {
  id: Scalars['String'];
};


export type QuerybooksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Book = {
  authorId: Scalars['String'];
  categorieId: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Category = {
  id: Scalars['String'];
  name: Scalars['String'];
};

    }
    export type QueryBooksSdk = {
  /** 

Equivalent to GET /books/{id} **/
  book: InContextSdkMethod<BooksTypes.Query['book'], BooksTypes.QuerybookArgs, MeshContext>,
  /** 

Equivalent to GET /books **/
  books: InContextSdkMethod<BooksTypes.Query['books'], BooksTypes.QuerybooksArgs, MeshContext>,
  /** 

Equivalent to GET /categories **/
  categories: InContextSdkMethod<BooksTypes.Query['categories'], BooksTypes.QuerycategoriesArgs, MeshContext>
};

export type MutationBooksSdk = {

};

export type SubscriptionBooksSdk = {

};


    export namespace AuthorsTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  Int: number;
  Float: number;
  authors_v1_ListAuthorsRequest_Input: any;
};

export type Query = {
  authors_v1_AuthorsService_GetAuthor?: Maybe<authors_v1_Author>;
  authors_v1_AuthorsService_ListAuthors?: Maybe<authors_v1_ListAuthorsResponse>;
  authors_v1_AuthorsService_connectivityState?: Maybe<ConnectivityState>;
};


export type Queryauthors_v1_AuthorsService_GetAuthorArgs = {
  input?: InputMaybe<authors_v1_GetAuthorRequest_Input>;
};


export type Queryauthors_v1_AuthorsService_ListAuthorsArgs = {
  input?: InputMaybe<Scalars['authors_v1_ListAuthorsRequest_Input']>;
};


export type Queryauthors_v1_AuthorsService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']>;
};

export type authors_v1_Author = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  editor?: Maybe<Scalars['String']>;
};

export type authors_v1_GetAuthorRequest_Input = {
  id?: InputMaybe<Scalars['String']>;
};

export type authors_v1_ListAuthorsResponse = {
  items?: Maybe<Array<Maybe<authors_v1_Author>>>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

    }
    export type QueryAuthorsSdk = {
  /** null **/
  authors_v1_AuthorsService_GetAuthor: InContextSdkMethod<AuthorsTypes.Query['authors_v1_AuthorsService_GetAuthor'], AuthorsTypes.Queryauthors_v1_AuthorsService_GetAuthorArgs, MeshContext>,
  /** null **/
  authors_v1_AuthorsService_ListAuthors: InContextSdkMethod<AuthorsTypes.Query['authors_v1_AuthorsService_ListAuthors'], AuthorsTypes.Queryauthors_v1_AuthorsService_ListAuthorsArgs, MeshContext>,
  /** undefined **/
  authors_v1_AuthorsService_connectivityState: InContextSdkMethod<AuthorsTypes.Query['authors_v1_AuthorsService_connectivityState'], AuthorsTypes.Queryauthors_v1_AuthorsService_connectivityStateArgs, MeshContext>
};

export type MutationAuthorsSdk = {

};

export type SubscriptionAuthorsSdk = {

};


    export namespace StoresTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Store = {
  id: Scalars['ID'];
  name: Scalars['String'];
  location: Scalars['String'];
};

export type Sells = {
  bookId: Scalars['ID'];
  sellsCount: Scalars['Int'];
  monthYear?: Maybe<Scalars['String']>;
  storeId: Scalars['ID'];
};

export type Query = {
  stores: Array<Store>;
  bookSells: Array<Sells>;
};


export type QuerybookSellsArgs = {
  storeId: Scalars['ID'];
};

    }
    export type QueryStoresSdk = {
  /** null **/
  stores: InContextSdkMethod<StoresTypes.Query['stores'], {}, MeshContext>,
  /** null **/
  bookSells: InContextSdkMethod<StoresTypes.Query['bookSells'], StoresTypes.QuerybookSellsArgs, MeshContext>
};

export type MutationStoresSdk = {

};

export type SubscriptionStoresSdk = {

};

export type BooksContext = {
      ["Books"]: { Query: QueryBooksSdk, Mutation: MutationBooksSdk, Subscription: SubscriptionBooksSdk },
    };

export type AuthorsContext = {
      ["Authors"]: { Query: QueryAuthorsSdk, Mutation: MutationAuthorsSdk, Subscription: SubscriptionAuthorsSdk },
    };

export type StoresContext = {
      ["Stores"]: { Query: QueryStoresSdk, Mutation: MutationStoresSdk, Subscription: SubscriptionStoresSdk },
    };

export type MeshContext = BooksContext & AuthorsContext & StoresContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const { sdkRequesterFactory } = await getBuiltMesh();
  return getSdk<TOperationContext>(sdkRequesterFactory(globalContext));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;