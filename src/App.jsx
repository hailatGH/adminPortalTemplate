import { AppWrap } from "./wrapper";
import { ThemeProvider, SidebarProvider } from "./context";

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppWrap />
      </SidebarProvider>
    </ThemeProvider>
  );
}
