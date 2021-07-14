/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime'
export type SignInInput = {
  clientMutationId?: string | null
  credentials?: AUTH_PROVIDER_CREDENTIALS | null
}
export type AUTH_PROVIDER_CREDENTIALS = {
  email: string
  password: string
}
export type loginMutationVariables = {
  input: SignInInput
}
export type loginMutationResponse = {
  readonly signIn: {
    readonly token: string | null
    readonly user: {
      readonly name: string
      readonly id: string
      readonly email: string
    } | null
  } | null
}
export type loginMutation = {
  readonly response: loginMutationResponse
  readonly variables: loginMutationVariables
}

/*
mutation loginMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
    token
    user {
      name
      id
      email
    }
  }
}
*/

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input',
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input',
          },
        ],
        concreteType: 'SignInPayload',
        kind: 'LinkedField',
        name: 'signIn',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'token',
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: 'User',
            kind: 'LinkedField',
            name: 'user',
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'name',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'id',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'email',
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ]
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'loginMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'loginMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '0fd0eb9c644684063b137645f4a5dadd',
      id: null,
      metadata: {},
      name: 'loginMutation',
      operationKind: 'mutation',
      text: 'mutation loginMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    token\n    user {\n      name\n      id\n      email\n    }\n  }\n}\n',
    },
  }
})()
;(node as any).hash = 'c023e67dcd65a9386eeb4d466ec01a45'
export default node
