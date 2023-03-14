import React from 'react'

type Child = {
    children: React.ReactNode
    className: string
}

const Layout = ({children}: Child) => {
    return (
        <div className="py-10 bg-gray-900 min-h-screen">
            {children}
        </div>
    )
}

export default Layout