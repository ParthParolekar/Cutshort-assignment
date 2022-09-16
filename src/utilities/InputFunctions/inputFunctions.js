export const nameChangeHandler = (e, setUser, user) => {
  setUser({ ...user, name: e.target.value });
};

export const displayNameChangeHandler = (e, setUser, user) => {
  setUser({ ...user, displayName: e.target.value });
};

export const workspaceNameChangeHandler = (e, setUser, user) => {
  setUser({ ...user, workspaceName: e.target.value });
};

export const workspaceURLChangeHandler = (e, setUser, user) => {
  setUser({ ...user, workspaceURL: e.target.value });
};
