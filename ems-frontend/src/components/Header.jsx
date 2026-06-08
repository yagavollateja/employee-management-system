import React from 'react'
import {useNavigate} from 'react-router-dom'
function Header() {
    const navigator = useNavigate()
    const handleBackNav=()=>{
        navigator("/employees")
    }
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark fixed-top">
                    <h6 className="navbar-brand mx-3" onClick={handleBackNav}>Employee Management System</h6>
                </nav>
            </header>
        </div>
    )
}

export default Header
