import React from 'react'
import { Link } from 'react-router-dom'
import './authBar.scss'
import UserMenu from '../UserMenu/UserMenu'

export default function AuthBar() {
    return (
        <div className="auth-bar">
            <Link to="/fin-project-front/registration" className="logo bar-logo"></Link>
            <UserMenu />
        </div>
    )
}