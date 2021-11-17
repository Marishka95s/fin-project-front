import React from 'react'
import './userMenu.scss'

export default function UserMenu() {
    return (
        <div className="user-menu">
            <span className="user-name">Имя</span>
            <button className="logout-button" type="button">
                <svg className="logout-icon">
                    <use href="../../../../images/icons/logout-icon.svg"></use>
                </svg>
                <span className="exit-button-text">Выйти</span>
            </button>
        </div>

    )
}