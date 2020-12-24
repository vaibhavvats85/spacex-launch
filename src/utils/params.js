export const getParamsObj = (params) => {
    let queryObj = {};
    for (let entry of params.entries()) {
        queryObj = {
            ...queryObj,
            [entry[0]]: entry[1]
        }
    };
    return queryObj;
}