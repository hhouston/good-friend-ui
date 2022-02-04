import moment from 'moment'
// import React, { useState, useEffect } from 'react'
import StepOne from './StepOne'
// import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepLovedOne from './StepLovedOne'
import StepAccountSetup from './StepAccountSetup'
import StepEvent from './StepEvent'

import Check from '@material-ui/icons/Check'

import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
// import Button from '@material-ui/core/Button'

import { useIsMobile } from '../../hooks/window-resize'

import classNames from 'classnames'

import StepBundle from './StepBundle'

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center'
    },
    active: {
        color: '#784af4'
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor'
    },
    completed: {
        color: '#784af4',
        zIndex: 1
    }
})

function StyledStepIcon(props) {
    const classes = useQontoStepIconStyles()
    const { active, completed } = props

    return (
        <div
            className={classNames(classes.root, {
                [classes.active]: active
            })}
        >
            {completed ? (
                <Check className={classes.completed} />
            ) : (
                <div className={classes.circle} />
            )}
        </div>
    )
}

const SignUp = () => {
    const isMobile = useIsMobile()
    const [signUpForm, updateSignUpForm] = useState({
        input: [{
            userId: null,
            type: 'OTHER',
            date: moment.now().valueOf().toString(),
            status: 'NEW',
            title: ''
        }],
        friend: {
            name: '',
            age: null,
            gender: '',
            interests: ''
        }
    })

    const {
        input: { userId }
    } = signUpForm

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            display: 'flex',
            minHeight: '100%'
        },
        stepper: {
            background: '#EEF2FF',
            padding: '48px',
            height: '100vh'
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        actionsContainer: {
            marginBottom: theme.spacing(2)
        },
        resetContainer: {
            padding: theme.spacing(3)
        },
        line: {
            borderColor: '#2b137d'
        }
    }))

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    function getSteps() {
        return ['Create account', 'Details', 'Finish!']
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <StepAccountSetup
                        handleNext={handleNext}
                        updateSignUpForm={updateSignUpForm}
                    />
                )
            case 1:
                return (
                    <StepEvent
                        handleBack={handleBack}
                        handleNext={handleNext}
                        userId={userId}
                        signUpForm={signUpForm}
                        updateSignUpForm={updateSignUpForm}
                    />
                )
            case 2:
                return <StepFour />
            default:
                return 'Unknown step'
        }
    }

    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(1)
    const steps = getSteps()

    return (
        <div className={classes.root}>
            {!isMobile && (
                <Stepper
                    activeStep={activeStep}
                    orientation="vertical"
                    className={classes.stepper}
                >
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={StyledStepIcon}>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            )}
            <div className="active-step-container">
                {getStepContent(activeStep)}
            </div>
        </div>
    )
}

export default SignUp
