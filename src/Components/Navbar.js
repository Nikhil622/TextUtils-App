import React from 'react'

export default function Navbar(props) {
    let k={color:props.mode==='Dark'?'black':'white',backgroundColor:props.mode==='Dark'?'white':'black',margin:0};
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{padding:0,margin:0,color:k.color,backgroundColor:k.color}}>
                <div className="container-fluid" style={{padding:0,margin:0,background:'black'}}>
                    <a className="navbar-brand" href="#" style={{color:'white'}}>TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'white'}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{color:'white'}}>About</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" style={{color:'white'}} onClick={props.changeMode} type="checkbox" role="switch" id="modeChange"/>
                            <label className="form-check-label" htmlFor="modeChange">Enable {props.mode} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
