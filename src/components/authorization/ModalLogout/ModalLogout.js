import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux'
import operations from '../../../redux/auth/auth-operations'
import './ModalLogout.scss';

const modalRoot = document.querySelector('#modal-root');

export default function ModalLogout({ onClose }) {
    const dispatch = useDispatch()
    const onLogout = useCallback(() => {
        dispatch(operations.logout());
    }, [dispatch]);

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackdropClick = useCallback(
        event => {
            if (event.currentTarget === event.target) {
                onClose();
            }
        },
        [onClose],
    );

    return createPortal(
        <div className="Modal__backdrop" onClick={handleBackdropClick}>
            <div className="Modal__content" onClose={onClose}>
                <span>Ну гудбай</span>
                <button onClick={onLogout}>Ок</button>
                <button onClick={handleBackdropClick}>Отмена</button>
            </div>
        </div>,
        modalRoot,
    );
}