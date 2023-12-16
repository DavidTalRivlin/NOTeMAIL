import { NoteFilter } from "./NoteFilter"
import { MailFilter } from "../apps/mail/cmps/MailFilter"

const { Link, NavLink } = ReactRouterDOM

export function NoteHeader({filterBy, onSetFilter}) {
    if (window.location.pathname !== '/index.html') {
        return (
            
            <div>
                <header className="header-container">
 
                    <div className="header flex space-between align-center">
                        <div className="flex space-between align-center">
                            <button>☰</button>
                            <Link to="/">
                                <img
                                    src="./assets/img/note.png"
                                    alt="logo"
                                    className="logo-header"
                                />
                            </Link>
                        </div>

                        <NoteFilter filterBy={filterBy} onSetFilter={onSetFilter} />
   
                        <div>
                            <img
                                src="./assets/icons/hamburger.svg"
                                alt="logo"
                                className="logo-header"
                            />
                            <img
                                src="./assets/img/David.png"
                                alt="logo"
                                className="logo-header"
                            />
                        </div>

                    </div>
                </header>
            </div>

            // <header classNameName="app-header">

            //     <nav>
            //         <NavLink to="/">Home</NavLink>
            //         <NavLink to="/about">About</NavLink>
            //         <NavLink to="/mail/">Mail</NavLink>
            //         <NavLink to="/note">Note</NavLink>
            //     </nav>
            // </header>
        )
    }
}