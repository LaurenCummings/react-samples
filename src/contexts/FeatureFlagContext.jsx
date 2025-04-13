import { createContext, useState, useEffect } from 'react';
import featureFlagsDataServiceCall from '../data/FeatureFlag';

export const FeatureFlagContext = createContext(null);

function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true)
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            setEnabledFlags(response);
            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
            throw new Error(error);
        }
    }

    useEffect(() => {
        fetchFeatureFlags();
    },[]);

    return (
        <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}

export default FeatureFlagGlobalState;