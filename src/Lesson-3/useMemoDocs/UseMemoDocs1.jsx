import { useMemo } from "react";


export function UseMemoDocs1() {
    
    const children = useMemo(() => <MyList />, [])
    // this is how we are using useMemo for JSX     

    return(
        <>
            <h3>Memoizing individual JSX nodes</h3>
            {children}
        </>
    )
}


const MyList = () => {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}