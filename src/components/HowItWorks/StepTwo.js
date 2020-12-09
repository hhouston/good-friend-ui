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
                        <PrimaryButton
                            style={{
                                fontWeight: '700',
                                fontFamily: 'Karla, sans-serif'
                            }}
                        >
                            Step 2
                        </PrimaryButton>
                        <p className="step-text step-content-text-two">
                          Enter your up coming event details (like birthday,
                          anniversary, Christmas, etc.) the event date and your gift price range.
                        </p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default StepTwo
