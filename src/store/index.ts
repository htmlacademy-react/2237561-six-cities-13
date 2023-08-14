import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import type {TState, TAppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

