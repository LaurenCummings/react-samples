import { createContext } from 'react';

export const FeatureFlagsContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
    return (
        <FeatureFlagsContext.Provider value={{}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}

export default FeatureFlagGlobalState;