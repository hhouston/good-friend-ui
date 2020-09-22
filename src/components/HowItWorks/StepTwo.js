import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { PrimaryButton } from '../common'

const StepTwo = () => {
    return (
        <FadeInSection direction="left">
            <div className="step-container">
                <div className="step-two-section">
                    <img
                        src={require('../../images/step-two.png')}
                        className="step-image step-image-left"
                        alt="step two"
                    />
                    <div className="step-content step-content-two">
                        <PrimaryButton>Step 02</PrimaryButton>
                        <p className="step-text step-content-text-two">
                            Select the type of event (birthday, anniversary,
                            graduation, etc) the date your gift price range any
                            info you'd like use to have on the recipient and
                            your personal curator will handle the rest
                        </p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default StepTwo
