import { createAction } from '@reduxjs/toolkit';

export const registrationRequest = createAction('auth/registrationRequest')
export const registrationSuccess = createAction('auth/registrationSuccess')
export const registrationrError = createAction('auth/registrationrError')

export const loginRequest = createAction('auth/loginRequest')
export const loginSuccess = createAction('auth/loginSuccess')
export const loginError = createAction('auth/loginError')

export const logoutRequest = createAction('auth/logoutRequest')
export const logoutSuccess = createAction('auth/logoutSuccess')
export const logoutError = createAction('auth/logoutError')


