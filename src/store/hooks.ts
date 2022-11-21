import { Dispatch } from 'react';

import { AnyAction, EmptyObject, ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { store } from './store';
import { AppStoreType } from './types';

export const useAppDispatch = (): ThunkDispatchType =>
  useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;

type ThunkDispatchType = ThunkDispatch<EmptyObject, undefined, AnyAction> &
  Dispatch<AnyAction>;
