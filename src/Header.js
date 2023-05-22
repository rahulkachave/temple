const Hello = () => { //this one is function es6
    return(
        <h1 style={{color:"black"}}>helo friends</h1>// style={{color:""}}for css
    )
}
function Footers(){ //this one is function
    return(
        <h1 className ="footerfu">this is a Footer</h1>//className is for a css
    )
}
// export default Footer;//default only  one function  export(import Footer in Appjs)
export {Hello ,Footers}; // in curly brace we can export  both functions (import import { Hello,Footer } from './Header'; in Appjs)
 