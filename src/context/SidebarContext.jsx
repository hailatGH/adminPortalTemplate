import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
const ToggleSidebarContext = createContext();

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const useToggleSidebar = () => {
  return useContext(ToggleSidebarContext);
};

export const SidebarProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <SidebarContext.Provider value={openMenu}>
      <ToggleSidebarContext.Provider value={setOpenMenu}>
        {children}
      </ToggleSidebarContext.Provider>
    </SidebarContext.Provider>
  );
};
