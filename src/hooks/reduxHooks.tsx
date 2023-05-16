import { useDispatch, useSelector } from "react-redux";
import type {TypedUseSelectorHook} from 'react-redux';
import type { RootState, AppDispatch } from "../redux/store";


//кастомные хуки useDispatch/useSelector для ts
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;