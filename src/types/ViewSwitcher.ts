export interface ViewSwitcherProps {
  view: "list" | "grid";
  setView: (view: "list" | "grid") => void;
}