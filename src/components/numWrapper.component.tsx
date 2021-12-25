import React from 'react';

export interface LayoutProps {
    children: React.ReactNode;
}

const NumberWrapper = (props: LayoutProps) => {
    return (
        <span
            style={{
                backgroundColor: '#6e768166',
                borderRadius: 50,
                paddingTop: 10,
                padding: 5,
                height: 12,
                width: 'fit-content',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 7,
            }}
        >
            {props.children}
        </span>
    );
};

export default NumberWrapper;
