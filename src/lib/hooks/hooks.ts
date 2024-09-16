import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppStore, Rootstate, AppDispatch } from "./../store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Rootstate>();
export const useAppStore = useStore.withTypes<AppStore>();
