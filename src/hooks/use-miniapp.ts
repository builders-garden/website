import { useContext } from "react";
import { MiniAppContext } from "@/contexts/miniapp-context";

export function useMiniApp() {
  const context = useContext(MiniAppContext);
  if (context === undefined) {
    throw new Error("useMiniApp must be used within a MiniAppProvider");
  }
  return context;
}
