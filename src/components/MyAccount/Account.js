import React, { useState, useEffect } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import './styles.css'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const GET_USER = gql`
    query getUserById($userId: ID!) {
        getUserById(userId: $userId) {
            id
            firstName
            lastName
            email
            password
            phone
            zipCode
        }
    }
`

const UPDATE_USER = gql`
    mutation updateUser($user: UpdateUserInput!) {
        updateUser(user: $user)
    }
`

const UPDATE_PASSWORD = gql`
    mutation resetPassword($input: ResetPasswordInput!) {
        resetPassword(user: $input)
    }
`

const EditForm = ({
    firstName,
    lastName,
    email,
    phone,
    zipCode,
    onClick,
    updateFormData,
    formData,
    userId
}) => {
    const [updateForm] = useMutation(UPDATE_USER, {
        refetchQueries: [{ query: GET_USER, variables: { userId } }],
        awaitRefetchQueries: true
    })

    const updateEntry = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const submitForm = async () => {
        await updateForm({
            variables: {
                user: {
                    id: userId,
                    fields: formData
                }
            }
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
                            disabled
                            name="email"
                            className="account-form-input"
                            type="email"
                            placeholder={email}
                            aria-label="Email"
                            value={formData.email}
                            // onChange={updateEntry}
                        />
                    </div>
                    <div className="account-input-container">
                        <label className="account-form-label" htmlFor="phone">
                            Phone number
                        </label>
                        <input
                            name="phone"
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
                        <label className="account-form-label" htmlFor="zipCode">
                            Zip code
                        </label>
                        <input
                            name="zipCode"
                            className="account-form-input"
                            type="text"
                            placeholder="Zip code"
                            aria-label="Zip code"
                            value={formData.zipCode}
                            onChange={updateEntry}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '0 12px'
                    }}
                >
                    <Button
                        shape="round"
                        type="secondary"
                        className="my-account-button"
                        size="large"
                        onClick={submitForm}
                    >
                        Save changes
                    </Button>
                </div>
            </form>
        </div>
    )
}

const ViewForm = ({
    firstName,
    lastName,
    email,
    phone,
    zipCode,
    onClick,
    userId,
    changePassword,
    setChangePassword
}) => {
    const [passwordForm, updatePasswordForm] = useState({
        newPassword: '',
        newPasswordConfirm: ''
    })
    const [errors, setErrors] = useState(null)
    const [updatePassword] = useMutation(UPDATE_PASSWORD)

    const updateEntry = (e) => {
        updatePasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value
        })
    }

    const saveNewPassword = async () => {
        if (!changePassword) {
            setChangePassword(true)
            return
        }
        const { newPassword, newPasswordConfirm } = passwordForm
        if (newPassword !== newPasswordConfirm) {
            setErrors(`Passwords don't match!`)
        } else {
            await updatePassword({
                variables: {
                    input: {
                        userId,
                        password: newPassword
                    }
                }
            })
            setErrors(null)
            setChangePassword(false)
        }
    }
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
                        <span className="account-form-label" for="zipCode">
                            Zip code
                        </span>
                        <div className="account-entry">{zipCode}</div>
                    </div>
                </div>
                {changePassword && (
                    <div className="account-form">
                        <div className="account-input-container">
                            <span className="account-form-label">
                                New Password
                            </span>
                            {errors && (
                                <p
                                    style={{
                                        color: '#f56565',
                                        fontSize: '14px',
                                        margin: '0'
                                    }}
                                >
                                    {errors}
                                </p>
                            )}

                            <div style={{ display: 'flex' }}>
                                <input
                                    name="newPassword"
                                    className="account-form-input"
                                    placeholder="New password"
                                    type="password"
                                    aria-label="First name"
                                    style={{ margin: '0 12px' }}
                                    onChange={updateEntry}
                                />
                                <input
                                    name="newPasswordConfirm"
                                    className="account-form-input"
                                    type="password"
                                    aria-label="First name"
                                    placeholder="Confirm new password"
                                    style={{ margin: '0 12px' }}
                                    onChange={updateEntry}
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0 12px'
                    }}
                >
                    <Button
                        shape="round"
                        type="secondary"
                        className="my-account-button"
                        size="large"
                        onClick={saveNewPassword}
                    >
                        {changePassword ? 'Save password' : 'Change password'}
                    </Button>
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
        </div>
    )
}

ViewForm.defaultProps = {
    phoneNumber: '',
    zipCode: ''
}

const Account = ({ editMode }) => {
    const userId = localStorage.getItem('userId')
    const [isEditing, setIsEditing] = useState(editMode)
    const [updatedUserInput, setUpdatedUserInput] = useState({})
    const [changePassword, setChangePassword] = useState(false)
    const { loading, error, data, refetch } = useQuery(GET_USER, {
        variables: { userId }
    })

    useEffect(() => {
        if (loading === false && data) {
            setUpdatedUserInput({
                firstName: data.getUserById.firstName,
                lastName: data.getUserById.lastName,
                phone: data.getUserById.phone,
                zipCode: data.getUserById.zipCode
            })
        }
    }, [loading, data])

    if (loading) return 'loading'
    if (error) return <p>{error}</p>

    console.log(data)

    if (!isEditing) {
        return (
            <ViewForm
                {...data.getUserById}
                userId={data.getUserById.id}
                changePassword={changePassword}
                setChangePassword={setChangePassword}
                onClick={() => setIsEditing(!isEditing)}
            />
        )
    }
    return (
        <EditForm
            {...data.getUserById}
            onClick={() => setIsEditing(!isEditing)}
            formData={updatedUserInput}
            userId={data.getUserById.id}
            updateFormData={setUpdatedUserInput}
            refetch={refetch}
        />
    )
}

Account.defaultProps = {
    editMode: false
}

export default Account
