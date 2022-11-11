import { atom, selector } from "recoil";

interface IsAuth {
  user: any;
  displayName: string;
}

export const authState = atom<IsAuth>({
  key: "auth",
  default: { user: null, displayName: "" },
});

export const authSelector = selector<IsAuth>({
  key: "selectAuth",
  get: ({ get }) => {
    const originalState = get(authState);
    console.log("user: " + originalState.user);
    return originalState;
  },
  set: ({ set }, newValue) => {
    set(authState, newValue);
  },
});
