import React from 'react'

const AgeIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="#9CA3AF"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '16px', flexShrink: '0' }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
    </svg>
)

const InterestsIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="#9CA3AF"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '16px', flexShrink: '0' }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
    </svg>
)

const IdentityIcon = () => (
    <svg
        className="w-6 h-6"
        fill="none"
        stroke="#9CA3AF"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '16px', flexShrink: '0' }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
    </svg>
)
const PeopleCard = ({ name, interests, age, gender }) => {
    return (
        <div>
            <div className="people-card">
                <div className="people-card-heading">
                    <img
                        src={
                            gender === 'male'
                                ? require('../../images/avatar_guy.png')
                                : require('../../images/avatar_woman.png')
                        }
                        className="people-card-img"
                    ></img>
                    <p className="people-card-name">{name}</p>
                </div>
                <div className="people-details">
                    <div className="icon-container">
                        <AgeIcon />
                        <span className="people-detail">{age}</span>
                    </div>
                    <div className="icon-container">
                        <IdentityIcon />
                        <p className="people-detail">{gender}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeopleCard
