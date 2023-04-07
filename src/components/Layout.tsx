import React from 'react'

type Child = {
    children: React.ReactNode
    className: string
}
//типизацию компонентов проще проводить через дженерик по типу. const Layout:FC<Cild> = ({children}) => { Использовать типы или интерфейсы - дело каждого, я обычно юзаю интерфейсы их расширять проще
// но чего точно быть не должно - это полей, которые не используются. Ты объявил className: string и не юзаешь его в компоненте. Зачем?)
// и лучше бы более осмысленные названия типов. Для компонентов это обычно interface LayoutProps (в твоем случае)
// 
const Layout = ({children}: Child) => {
    return (
        <div className="py-10 bg-gray-900 min-h-screen">
            {children}
        </div>
    )
}

export default Layout
