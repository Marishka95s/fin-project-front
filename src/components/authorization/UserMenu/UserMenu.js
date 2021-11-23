import { useCallback, useState } from 'react'
import './userMenu.scss'

import { useSelector } from 'react-redux'
import { authSelectors } from '../../../redux/auth'
import ModalLogout from '../ModalLogout/ModalLogout'

export default function UserMenu() {
    const [openModal, setOpenModal] = useState(false)

    const username = useSelector(authSelectors.getUserName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onOpenModal = useCallback(() => {
        setOpenModal(true)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const closeModal = useCallback(() => {
        setOpenModal(false)
    });

    return (
        <div className="user-menu">
            <span className="user-name">{username}</span>
            <button className="logout-button" type="button" onClick={onOpenModal}>
                <svg className="logout-icon">
                    <use href="../../../../images/icons/logout-icon.svg"></use>
                </svg>
                <span className="exit-button-text">Выйти</span>
            </button>
            {openModal ? <ModalLogout onClose={closeModal} /> : null}
        </div>
    )
}