import React from 'react'
import './styles.css'
import FadeInSection from '../FadeInSection'
import { PrimaryButton } from '../common'

const StepThree = () => {
    return (
        <FadeInSection direction="right">
            <div className="step-container">
                <div className="step-one-section">
                    <div className="step-content step-content-left">
                        <PrimaryButton
                            style={{
                                fontWeight: '700',
                                fontFamily: 'Karla, sans-serif'
                            }}
                        >
                            Step 3
                        </PrimaryButton>
                        <p className="step-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc porttitor vulputate sem vel facilisis.
                        </p>
                    </div>
                    <img
                        src={require('../../images/step-three.png')}
                        className="step-image step-image-right"
                        alt="step three"
                    />
                </div>
            </div>
        </FadeInSection>
    )
}

export default StepThree
