// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace AuthorsTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  authors_v1_ListAuthorsRequest_Input: { input: any; output: any; }
  ObjMap: { input: any; output: any; }
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
  input?: InputMaybe<Scalars['authors_v1_ListAuthorsRequest_Input']['input']>;
};


export type Queryauthors_v1_AuthorsService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type authors_v1_Author = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  editor?: Maybe<Scalars['String']['output']>;
};

export type authors_v1_GetAuthorRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
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

  export type QuerySdk = {
      /** null **/
  authors_v1_AuthorsService_GetAuthor: InContextSdkMethod<Query['authors_v1_AuthorsService_GetAuthor'], Queryauthors_v1_AuthorsService_GetAuthorArgs, MeshContext>,
  /** null **/
  authors_v1_AuthorsService_ListAuthors: InContextSdkMethod<Query['authors_v1_AuthorsService_ListAuthors'], Queryauthors_v1_AuthorsService_ListAuthorsArgs, MeshContext>,
  /** undefined **/
  authors_v1_AuthorsService_connectivityState: InContextSdkMethod<Query['authors_v1_AuthorsService_connectivityState'], Queryauthors_v1_AuthorsService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Authors"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
