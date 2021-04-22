import React from 'react';
import './LoadingSpinner.scss';

export interface LoadingSpinnerProps {
    isLoading: boolean;
    sizeInEm: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading, sizeInEm }: LoadingSpinnerProps) => {
    const containerStyle = {
        display: isLoading ? 'block' : 'none',
        width: `${sizeInEm}em`,
        height: `${sizeInEm}em`,
    };
    const circleStyle = {
        top: `${sizeInEm / 4}em`,
        left: `${sizeInEm / 4}em`,

        width: `${sizeInEm / 2}em`,
        height: `${sizeInEm / 2}em`,
    };

    return (
        <div className="loading-spinner" style={containerStyle}>
            <div className="loading-spinner__circle" style={circleStyle} />
            <div className="loading-spinner__circle loading-spinner__circle_delay" style={circleStyle} />
        </div>
    );
};

export default LoadingSpinner;
