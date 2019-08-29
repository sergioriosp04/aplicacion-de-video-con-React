import React from 'react'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
//redux
import { connect } from 'react-redux'
import { logoutRequest } from '../action'
//styles
import '../assets/styles/components/Header.scss'
//imagenes
import videoIcon from '../assets/static/video-icon.jpg'
import userIcon from '../assets/static/user-icon.png'

const Header = (props) =>{
    const { user } = props;
    const hashUser = Object.keys(user).length > 0;

    const handleLogout = () =>{
        props.logoutRequest({})
    }

    return (
        <div className="header">
            <Link to="/">
                <img  className="image-header" src= {videoIcon} alt="icono de video" />         
            </Link>
            <div className ="menu">
                {hashUser ? 
                <img className="image-user" src={gravatar(user.email)} alt={user.email} />
                :
                <img className="image-user" src= {userIcon} alt="icono user" />
                }
                <span> perfil </span> 
                <div className="navbar">
                    <ul>
                        {hashUser ?
                            <li><a href="">{user.email}</a></li>
                            : null
                        }
                        {hashUser ?
                            <li><a href="#logout" onClick={handleLogout}>Cerrar sesion</a></li>                           
                            :
                            <Link to="/login">
                                <li>Iniciar sesion</li>
                            </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps= (state) =>{
    console.log(state)
    return {
        user: state.user
    }
}

const mapDispatchtoProps = {
    logoutRequest,
}

export default connect (mapStateToProps, mapDispatchtoProps)(Header)