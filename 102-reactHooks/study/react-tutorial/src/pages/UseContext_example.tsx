
import { createContext,useContext } from "react";

const ThemeContext = createContext(null);

export default function UseContext_example() {
   return(
    <ThemeContext.Provider value={{primaryColor:'coral'}}>
        <Toolbar />
    </ThemeContext.Provider>
   )
}

function Toolbar() {
    return(
        <Panel title='Toolbar'>
            <ThemedButton> Buuton1 </ThemedButton>
            <ThemedButton> Buuton2 </ThemedButton>
        </Panel>
    )

}

function Panel({title, children}) {
    const theme = useContext(ThemeContext);
    return(
        <section style={{backgroundColor:theme.primaryColor}}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

function ThemedButton({ children }) {
    const theme = useContext(ThemeContext);
    return(
        <button style={{backgroundColor:theme.primaryColor}}>{children}</button>
    )
}

