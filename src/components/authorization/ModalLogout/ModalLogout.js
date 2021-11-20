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
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content" onClose={onClose}>
                <span className="logout-modal-text">Вы действительно хотите выйти?</span>
                <div className="modal-buttons">
                    <button className="logout-modalBtn" onClick={onLogout}>Выйти</button>
                    <button className="close-modalBtn" onClick={handleBackdropClick}>Отмена</button>
                </div>
            </div>
        </div>,
        modalRoot,
    );
}