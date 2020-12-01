import React from 'react'
import './styles.css'
import { Button } from 'antd'
import classNames from 'classnames'

const PrimaryButton = ({
    onClick,
    className = null,
    children,
    type,
    style
}) => {
    return (
        <Button
            onClick={onClick}
            className={classNames(className, 'primary-button')}
            shape="round"
            style={
                type === 'secondary'
                    ? {
                          backgroundColor: '#fff',
                          color: '#FF3399',
                          borderColor: '#FF3399',
                          ...style
                      }
                    : {
                          backgroundColor: '#FF3399',
                          color: '#fff',
                          borderColor: '#FF3399',
                          ...style
                      }
            }
        >
            {children}
        </Button>
    )
}

export default PrimaryButton
