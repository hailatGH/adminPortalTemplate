import { SideNavbar, TopNavbar } from "../components";
import { useTheme, useSidebar } from "../context";

export default function AppWrap() {
  const theme = useTheme();
  const sidebar = useSidebar();

  console.log(theme);
  console.log(sidebar);
  return (
    <div>
      <TopNavbar />
      <SideNavbar />
    </div>
  );
}
