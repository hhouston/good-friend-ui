// import React, { useState, useEffect } from 'react'
import StepOne from './StepOne'
// import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepLovedOne from './StepLovedOne'
import StepAccountSetup from './StepAccountSetup'
import StepEvent from './StepEvent'
// import { PrimaryButton } from '../common'
// import { useHistory } from 'react-router-dom'
// import Stepper from '@material-ui/core/Stepper'
// import Step from '@material-ui/core/Step'
// import StepLabel from '@material-ui/core/StepLabel'
// import { useMutation } from '@apollo/client'
// import { gql } from '@apollo/client'
// import { makeStyles } from '@material-ui/core/styles'
import Check from '@material-ui/icons/Check'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { Button } from 'antd'

import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
// import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import StepConnector from '@material-ui/core/StepConnector'
import classNames from 'classnames'

import StepBundle from './StepBundle'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%'
//     },
//     button: {
//         marginTop: theme.spacing(1),
//         marginRight: theme.spacing(1)
//     },
//     actionsContainer: {
//         marginBottom: theme.spacing(2)
//     },
//     resetContainer: {
//         padding: theme.spacing(3)
//     }
// }))

// export const CREATE_EVENT = gql`
//     mutation createEvent($event: EventInput!) {
//         createEvent(event: $event)
//     }
// `

// const initialFormData = {
//     date: null,
//     type: null,
//     userId: 2,
//     status: 'NEW'
// }
// const SignUp = (props) => {
//     const classes = useStyles()

//     const [activeStep, setActiveStep] = React.useState(0)
//     const [isMobile, setIsMobile] = useState(0)
//     const [formData, updateFormData] = useState(initialFormData)

//     const [addEvent, { data }] = useMutation(CREATE_EVENT)

//     const history = useHistory()

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1)
//     }

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1)
//     }

//     const redirectHome = () => {
//         history.push('/')
//     }

//     const resize = () => {
//         setIsMobile(window.innerWidth < 768)
//     }

//     const updateForm = (field, value) => {
//         updateFormData({
//             ...formData,
//             [field]: value
//         })
//         console.log(formData)
//     }

//     const addNewEvent = () => {
//         const data = addEvent({
//             variables: { event: formData }
//         })
//         console.log(data)
//     }

//     function getSteps() {
//         return [
//             'Select master blaster campaign settings',
//             'Create an ad group',
//             'Create an ad'
//         ]
//     }

//     function getStepContent(stepIndex) {
//         switch (stepIndex) {
//             case 0:
//                 return 'Select campaign settings...'
//             case 1:
//                 return 'What is an ad group anyways?'
//             case 2:
//                 return 'This is the bit I really care about!'
//             default:
//                 return 'Unknown stepIndex'
//         }
//     }

//     const steps = [
//         {
//             key: 1,
//             title: 'Basic info',
//             content: <StepOne next={handleNext} updateForm={updateForm} />
//         },
//         {
//             key: 2,
//             title: 'Event details',
//             content: <StepThree isMobile={isMobile} updateForm={updateForm} />
//         },
//         {
//             key: 3,
//             title: 'Done!',
//             content: <StepFour />
//         }
//     ]

//     const otherSteps = getSteps()

//     useEffect(() => {
//         resize()
//         window.addEventListener('resize', resize)
//         return () => window.removeEventListener('resize', resize)
//     })

//     return (
//         <div className="sign-up-container">
//             <div className="sign-up-wrapper">
//                 <div
//                     className="logo-wrapper-form"
//                     onClick={() => redirectHome()}
//                 >
//                     <img
//                         src={require('../../images/geometric-heart-logo.png')}
//                         className="logo-image-form"
//                         alt="thank you logo"
//                     />

//                     <span className="logo-text">THANK YOU.</span>
//                 </div>
//                 <Stepper
//                     activeStep={activeStep}
//                     alternativeLabel
//                     orientation="vertical"
//                 >
//                     {otherSteps.map((label) => (
//                         <Step key={label}>
//                             <StepLabel>{label}</StepLabel>
//                         </Step>
//                     ))}
//                 </Stepper>

//                 <div className="steps-content">
//                     <div className="form-wrapper">
//                         {steps[activeStep].content}
//                     </div>
//                 </div>
//             </div>
//             <div className="steps-action">
//                 {activeStep > 0 && (
//                     <PrimaryButton
//                         type="secondary"
//                         style={{ margin: '0 8px' }}
//                         onClick={() => handleBack()}
//                     >
//                         Previous
//                     </PrimaryButton>
//                 )}
//                 {activeStep < steps.length - 1 && (
//                     <PrimaryButton onClick={() => handleNext()}>
//                         Skip
//                     </PrimaryButton>
//                 )}
//                 {activeStep === steps.length - 1 && (
//                     <PrimaryButton onClick={() => addNewEvent()}>
//                         Done
//                     </PrimaryButton>
//                 )}
//             </div>
//         </div>
//     )
// }

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
        return ['Create account', 'Select bundle', 'Loved one', 'Details']
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <StepAccountSetup />
            case 1:
                return <StepBundle />
            case 2:
                return <StepEvent />
            case 3:
                return <StepFour />
            default:
                return 'Unknown step'
        }
    }

    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = getSteps()

    return (
        <div className={classes.root}>
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
            <div className="active-step-container">
                {getStepContent(activeStep)}
                <div clasName="signup-buttons">
                    {activeStep > 0 && (
                        <Button
                            shape="round"
                            type="secondary"
                            size="large"
                            onClick={handleBack}
                            className="bundle-card-button"
                        >
                            Previous
                        </Button>
                    )}
                    {activeStep < steps.length && (
                        <Button
                            shape="round"
                            type="primary"
                            size="large"
                            className="bundle-card-button"
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SignUp
