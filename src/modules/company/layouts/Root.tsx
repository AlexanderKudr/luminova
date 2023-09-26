import { MemoizedNavbar } from "@/shared/layouts";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div>
      <MemoizedNavbar />
      <Outlet />
    </div>
  );
}
