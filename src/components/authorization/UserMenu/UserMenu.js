import { useCallback, useEffect, useState } from 'react'
import './userMenu.scss'
import operations from '../../../redux/auth/auth-operations'
import { useDispatch, useSelector } from 'react-redux'
import { authSelectors, authOperations } from '../../../redux/auth'

export default function UserMenu() {
    const dispatch = useDispatch()
    const username = useSelector(authSelectors.getUserName);

    const onLogout = useCallback(() => {
        dispatch(operations.logout());
    }, [dispatch]);
    return (
        <div className="user-menu">
            <span className="user-name">{username}</span>
            <button className="logout-button" type="button" onClick={onLogout}>
                <svg className="logout-icon">
                    <use href="../../../../images/icons/logout-icon.svg"></use>
                </svg>
                <span className="exit-button-text">Выйти</span>
            </button>
        </div>
    )
}