import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, children }) {
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
        e => {
            if (e.currentTarget === e.target) {
                onClose();
            }
            },
        [onClose],
    );

    return createPortal(
        <div className="Modal__backdrop" onClick={handleBackdropClick}>
            <div className="Modal__content">
                <button type="button" className="TransactionAddForm__closeBtn" onClick={onClose}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 17" stroke="black"/>
                    <path d="M1 17L17 0.999999" stroke="black"/>
                </svg>
            </button>

            <p className="TransactionAddForm__title">Добавить транзакцию</p>

            </div>
        </div>,
        modalRoot,
    );
}