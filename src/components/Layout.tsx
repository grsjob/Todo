import React from 'react'

const Layout = ({children}: any) => {
    return (
        <div className="py-10 bg-gray-900 min-h-screen">
            {children}
        </div>
    )
}

export default Layout