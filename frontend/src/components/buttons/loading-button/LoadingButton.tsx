import React from 'react';
import LoadingSpinner, { LoadingSpinnerProps } from '../../loading-spinner/LoadingSpinner';

import './LoadingButton.scss';

interface LoadingButtonProps extends LoadingSpinnerProps {
    text: string;
    onClick(): void;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
    isLoading,
    sizeInEm,
    text,
    type,
    onClick,
}: LoadingButtonProps) => {
    return (
        <div className="loading-button">
            <div className="loading-button__spinner">
                <LoadingSpinner isLoading={isLoading} sizeInEm={sizeInEm} />
            </div>
            <button
                onClick={onClick}
                type={type}
                className={`base-button base-button_full-width ${isLoading ? 'base-button_transparent' : ''}`}
            >
                {text}
            </button>
        </div>
    );
};

export default LoadingButton;
