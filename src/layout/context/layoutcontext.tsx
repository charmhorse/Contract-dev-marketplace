"use client";

import React, { createContext, useState } from "react";
import {
  LayoutContextProps,
  ChildContainerProps,
  LayoutState,
  LayoutConfig,
} from "@/types/types";

export const LayoutContext = createContext({} as LayoutContextProps);
export const LayoutProvider = ({ children }: ChildContainerProps) => {
  const [layoutState, setLayoutState] = useState<LayoutState>({
    overlayMenuActive: false,
  });
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    colorScheme: "light",
    scale: 14,
    theme: "lara-light-indigo",
    ripple: false,
    inputStyle: "outlined",
  });
  const value: LayoutContextProps = {
    layoutState,
    setLayoutState,
    layoutConfig,
    setLayoutConfig,
  };
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};
