import { createContext, useContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "./data.js";

// export const FeatureFlagsContext = createContext(null);

export const FeatureFlagsContext = createContext({
    loading: true, // Установите начальное значение, чтобы избежать деструктуризации null
    // ... другие свойства
  });

  export const ChildComponent = () => {
    const { loading } = useContext(FeatureFlagsContext);
    console.log('child')
    // ...
  };
  

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  const featureFlagsState = {
    loading: false,
    // ... другие свойства
  };

  return (
    <FeatureFlagsContext.Provider value={ featureFlagsState}>
      {/* Компоненты, которые будут использовать контекст */}
    </FeatureFlagsContext.Provider>
  );

//   return (
//     <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
//       {children}
//     </FeatureFlagsContext.Provider>
//   );
}