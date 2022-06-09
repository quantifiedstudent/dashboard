import {dataKey} from "../../interfaces/data";

export const Actions = {
    setWatchDataKeys: "[Global] API",
}
export const setWatchDataKeys = (watchDataKeys: dataKey[]) => ({
    type: Actions.setWatchDataKeys,
    payload: {
        watchDataKeys
    }
})
