import React, { Context, FunctionComponent } from "react";

const initialState = {
  displaySidebar: false,
  dispatch: null,
};
export interface UIState {
  displaySidebar: boolean;
  dispatch: (string) => void;
}

export const UIContext = React.createContext<UIState>(initialState);
UIContext.displayName = "UIContext";

export const UIProvider: FunctionComponent = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch("OPEN_SIDEBAR");
  const closeSidebar = () => dispatch("CLOSE_SIDEBAR");

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
  };

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

function uiReducer(state, action) {
  switch (action) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
      };
    }
  }
}