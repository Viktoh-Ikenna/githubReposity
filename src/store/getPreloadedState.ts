import { PartialRootState } from './configureStore';

import { initialUIState, UIState } from './reducers/repositories';

const getPreloadedUIState = (): UIState => {
    return {
        ...initialUIState,
    };
};

const getPreloadedState = (): PartialRootState => {
    return {
        repositories: getPreloadedUIState(),
    };
};

export default getPreloadedState;
