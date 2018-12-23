export const createProject = (project) => {
    return dispatch = () => {
        // make async call to dispatch
        dispatch({ type: 'CREATE_PROJECT', project });
    }
}