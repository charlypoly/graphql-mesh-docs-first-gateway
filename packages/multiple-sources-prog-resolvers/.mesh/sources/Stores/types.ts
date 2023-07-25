// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace StoresTypes {
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
};

export type Store = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  location: Scalars['String']['output'];
};

export type Sells = {
  bookId: Scalars['ID']['output'];
  sellsCount: Scalars['Int']['output'];
  monthYear?: Maybe<Scalars['String']['output']>;
  storeId: Scalars['ID']['output'];
};

export type Query = {
  stores: Array<Store>;
  bookSells: Array<Sells>;
};


export type QuerybookSellsArgs = {
  storeId: Scalars['ID']['input'];
};

  export type QuerySdk = {
      /** null **/
  stores: InContextSdkMethod<Query['stores'], {}, MeshContext>,
  /** null **/
  bookSells: InContextSdkMethod<Query['bookSells'], QuerybookSellsArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Stores"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
