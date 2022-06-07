export const getGlobalState = (store: { global: any; }) => {
    return store.global;
}

export const getWatchDataKeys = (store: any) => {
    return getGlobalState(store).watchDataKeys;
};
