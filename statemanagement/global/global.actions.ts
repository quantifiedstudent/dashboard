export const Actions = {
    setWatchDataKeys: "[Global] API",
}
export const setWatchDataKeys = (watchDataKeys: any) => ({
    type: Actions.setWatchDataKeys,
    payload: {
        watchDataKeys
    }
})
