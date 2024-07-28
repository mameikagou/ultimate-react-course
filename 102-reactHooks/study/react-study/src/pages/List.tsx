
// import React from 'react'
// import { ThemeContext } from '../App'
import React from 'react';
import {useThemeContext} from '../Hooks/useThemeContext'

export const List = () => {
    // 接受主题组件; 可以灵活接收; 
    // const theme = React.useContext(ThemeContext)
    const theme = useThemeContext();

    return (
        <div style={theme.theme as React.CSSProperties}>
            List
        </div>
    )
}