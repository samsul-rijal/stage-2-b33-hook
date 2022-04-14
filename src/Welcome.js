//import useEffect here

import { useEffect } from "react"

export default function Welcome() {

    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Welcome Component Did Mount" & "Welcome Component Will Unmount"
    useEffect(() => {
        console.log("Component welcome didmount");
        return () => {
            console.log("Welcome component didmount");
        }
    })


    return (
        <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
            Welcome
        </div>
    )
}
