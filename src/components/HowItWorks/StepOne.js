import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { PrimaryButton } from '../common'

const StepOne = () => {
    return (
        <FadeInSection direction="right">
            <div className="step-container">
                <div className="step-one-section">
                    <div className="step-content">
                        <PrimaryButton
                            style={{
                                fontWeight: '700',
                                fontFamily: 'Karla, sans-serif',
                            }}
                        >
                            Step 1
                        </PrimaryButton>
                        <p className="step-text">
                            Select a gift package that fits your needs and we
                            will pair you up with a suitable gift curator.
                        </p>
                    </div>
                    <img
                        src={require('../../images/step-one.png')}
                        className="step-image step-image-right"
                        alt="step one"
                    />
                </div>
            </div>
        </FadeInSection>
    )
}

export default StepOne
