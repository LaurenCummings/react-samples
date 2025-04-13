import { createContext } from 'react';

export const FeatureFlagContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
    return (
        <FeatureFlagContext.Provider value={{}}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

export default FeatureFlagGlobalState;