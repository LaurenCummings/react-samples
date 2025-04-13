import { createContext, useState, useEffect } from 'react';
import featureFlagsDataServiceCall from '../data/FeatureFlag';

export const FeatureFlagContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            const response = await featureFlagsDataServiceCall();
            console.log(response);
        } catch(error) {
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    },[]);

    return (
        <FeatureFlagContext.Provider value={{}}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

export default FeatureFlagGlobalState;