/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateUserInput = {
    authProvider?: AuthProviderSignupData | null;
    clientMutationId?: string | null;
    name: string;
};
export type AuthProviderSignupData = {
    credentials?: AUTH_PROVIDER_CREDENTIALS | null;
};
export type AUTH_PROVIDER_CREDENTIALS = {
    email: string;
    password: string;
};
export type signUpMutationVariables = {
    input: CreateUserInput;
};
export type signUpMutationResponse = {
    readonly createUser: {
        readonly user: {
            readonly name: string;
            readonly id: string;
            readonly email: string;
        };
    } | null;
};
export type signUpMutation = {
    readonly response: signUpMutationResponse;
    readonly variables: signUpMutationVariables;
};



/*
mutation signUpMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    user {
      name
      id
      email
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateUserPayload",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "signUpMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signUpMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9459d8ab0b0dbbd1fd25d5aadf3317cf",
    "id": null,
    "metadata": {},
    "name": "signUpMutation",
    "operationKind": "mutation",
    "text": "mutation signUpMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      name\n      id\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '55a537df6af7b56130a248c4adca38e9';
export default node;
