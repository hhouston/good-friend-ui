import React from 'react'

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true)
    const domRef = React.useRef()
    const { direction } = props
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
    }, [])
    return (
        <section
            className={`fade-in-section-${direction} ${
                isVisible ? 'is-visible' : ''
            }`}
            ref={domRef}
        >
            {props.children}
        </section>
    )
}

export default FadeInSection
