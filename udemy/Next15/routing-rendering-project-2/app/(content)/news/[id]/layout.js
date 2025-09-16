import React from 'react'

const DetailsPageLayout = ({children, modal}) => {
    return (
        <>
            {modal}
            {children}
        </>
    )
}
export default DetailsPageLayout
