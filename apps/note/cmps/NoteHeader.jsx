import { NoteFilter } from "./NoteFilter.jsx"

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
                            
                            <Link to="/about">
                            <img
                                src="./assets/img/David.png"
                                alt="logo"
                                className="logo-header"
                            />
                            </Link>
                        </div>

                    </div>
                </header>
            </div>
        )
    }
}
