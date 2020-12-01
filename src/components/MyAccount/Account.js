import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import './styles.css'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const GET_USER = gql`
    query getUserByEmail($email: String!) {
        getUserByEmail(email: $email) {
            id
            firstName
            lastName
            email
        }
    }
`

const UPDATE_USER = gql`
    mutation updateUser($user: UpdateUserInput!) {
        updateUser(user: $user)
    }
`

const EditForm = ({
    firstName,
    lastName,
    email,
    onClick,
    updateFormData,
    formData,
    userId
    // refetch,
}) => {
    const [updateForm, { refetch }] = useMutation(UPDATE_USER)
    const updateEntry = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const submitForm = () => {
        const data = updateForm({
            variables: {
                user: {
                    id: userId,
                    fields: formData
                }
            },
            onCompleted: () => refetch()
        })
        onClick()
    }

    return (
        <div className="my-account">
            <form className="account-form-wrapper">
                <div className="account-form">
                    <div className="account-input-container">
                        <label
                            className="account-form-label"
                            htmlFor="firstName"
                        >
                            First name
                        </label>
                        <input
                            name="firstName"
                            className="account-form-input"
                            type="text"
                            placeholder={firstName}
                            aria-label="First name"
                            value={formData.firstName}
                            onChange={updateEntry}
                        />
                    </div>
                    <div className="account-input-container">
                        <label
                            className="account-form-label"
                            htmlFor="lastName"
                        >
                            Last name
                        </label>
                        <input
                            name="lastName"
                            className="account-form-input"
                            type="text"
                            placeholder={lastName}
                            aria-label="Last name"
                            value={formData.lastName}
                            onChange={updateEntry}
                        />
                    </div>
                </div>
                <div className="account-form">
                    <div className="account-input-container">
                        <label className="account-form-label" for="email">
                            Email
                        </label>
                        <input
                            name="email"
                            className="account-form-input"
                            type="email"
                            placeholder={email}
                            aria-label="Email"
                            value={formData.email}
                            onChange={updateEntry}
                        />
                    </div>
                    <div className="account-input-container">
                        <label className="account-form-label" htmlFor="phone">
                            Phone number
                        </label>
                        <input
                            id="phone"
                            className="account-form-input"
                            type="text"
                            placeholder="Phone number"
                            aria-label="Phone number"
                            value={formData.phone}
                            onChange={updateEntry}
                        />
                    </div>
                </div>
                <div className="account-form">
                    <div className="account-input-container">
                        <label className="account-form-label" htmlFor="address">
                            Home address
                        </label>
                        <input
                            name="address"
                            className="account-form-input"
                            type="text"
                            placeholder="Address"
                            aria-label="Address"
                            value={formData.address}
                            onChange={updateEntry}
                        />
                    </div>
                </div>
                <Button
                    shape="round"
                    type="secondary"
                    className="my-account-button"
                    size="large"
                    onClick={submitForm}
                >
                    Save changes
                </Button>
            </form>
        </div>
    )
}

const ViewForm = ({ firstName, lastName, email, phone, address, onClick }) => {
    return (
        <div className="my-account">
            <div className="account-form-wrapper">
                <div className="account-form">
                    <div className="account-input-container">
                        <span className="account-form-label" for="firstName">
                            First name
                        </span>
                        <div className="account-entry">{firstName}</div>
                    </div>
                    <div className="account-input-container">
                        <span className="account-form-label" for="lastName">
                            Last name
                        </span>
                        <div className="account-entry">{lastName}</div>
                    </div>
                </div>
                <div className="account-form">
                    <div className="account-input-container">
                        <span className="account-form-label" for="email">
                            Email
                        </span>
                        <div className="account-entry">{email}</div>
                    </div>
                    <div className="account-input-container">
                        <span className="account-form-label" for="phone">
                            Phone number
                        </span>
                        <div className="account-entry">{phone}</div>
                    </div>
                </div>
                <div className="account-form">
                    <div className="account-input-container">
                        <span className="account-form-label" for="address">
                            Home address
                        </span>
                        <div className="account-entry">{address}</div>
                    </div>
                </div>
                <Button
                    shape="round"
                    type="primary"
                    className="my-account-button"
                    size="large"
                    onClick={onClick}
                >
                    Edit
                </Button>
            </div>
        </div>
    )
}

ViewForm.defaultProps = {
    phoneNumber: '',
    address: ''
}

const Account = ({ editMode }) => {
    const [isEditing, setIsEditing] = useState(editMode)
    const [updatedUserInput, setUpdatedUserInput] = useState({})
    const { loading, error, data, refetch } = useQuery(GET_USER, {
        variables: { email: 'bronwyn@gmail.com' }
    })

    if (loading) return 'loading'
    if (error) return <p>{error}</p>

    if (!isEditing) {
        return (
            <ViewForm
                {...data.getUserByEmail}
                onClick={() => setIsEditing(!isEditing)}
            />
        )
    }
    return (
        <EditForm
            {...data.getUserByEmail}
            onClick={() => setIsEditing(!isEditing)}
            formData={updatedUserInput}
            userId={data.getUserByEmail.id}
            updateFormData={setUpdatedUserInput}
            refetch={refetch}
        />
    )
}

Account.defaultProps = {
    editMode: false
}

export default Account
