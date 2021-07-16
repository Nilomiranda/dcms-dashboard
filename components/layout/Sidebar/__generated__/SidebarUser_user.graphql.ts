/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SidebarUser_user = {
    readonly name: string;
    readonly email: string;
    readonly " $refType": "SidebarUser_user";
};
export type SidebarUser_user$data = SidebarUser_user;
export type SidebarUser_user$key = {
    readonly " $data"?: SidebarUser_user$data;
    readonly " $fragmentRefs": FragmentRefs<"SidebarUser_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SidebarUser_user",
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
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '8675da006f9bc7227469c07fc0ef6eed';
export default node;
