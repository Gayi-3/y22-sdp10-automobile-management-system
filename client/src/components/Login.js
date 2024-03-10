import axios from 'axios'; 
import login from './login.jpg'; 
import Swal from 'sweetalert2'


export default function Login({ store }) { 
    function handleSubmit() { 
        console.log({ 
            un: document.getElementById("idun").value, 
            pw: document.getElementById("idpw").value 
        }); 
        axios.post('http://localhost:8081/check', { 
            un: document.getElementById("idun").value, 
            pw: document.getElementById("idpw").value 
        }).then((response) => { 
            console.log(response.data); 
            if (response.data !== "fail") { 
                store.dispatch({ "type": "login", "data": { "un": response.data.name, "role": response.data.role } }); 
                // Show login successful popup
                Swal.fire({
                    title: "Login Successful",
                    
                    icon: "success"
                  });
            } else {
                // Show login failed message
                Swal.fire({
                    title: "Login Unsuccessful",
                    
                    icon: "error"
                  });
            }
        }); 
    } 

    function handleMouseOver() { 
        document.getElementById("idlogin").style.boxShadow = "10px 10px 15px CornflowerBlue"; 
    } 

    function handleMouseLeave() { 
        document.getElementById("idlogin").style.boxShadow = "0px 0px 0px CornflowerBlue"; 
    } 

    return ( 
        <div className="full-background" style={{  
            backgroundImage: `url(${login})`,  
            backgroundSize: "cover", 
            display: "flex",  
            justifyContent: "center",  
            alignItems: "center", 
            height: "800px" 
        }}> 
           <div id="idlogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{  
                backgroundColor: "MightnightBlue",  
                padding: "20px",  
                borderRadius: "10px", 
                margin: "20px", 
                marginRight: "500px", 
                height: "350px", // Increase the height as desired 
                width: "400px", 
            }}> 
                <p style={{ fontSize: "25px" }}>Login Page</p> <br /> 
                <div style={{ textAlign: 'right', marginRight: '30px' }}> 
                    <label htmlFor="idun" style={{ marginRight: '500px' }}>Username:</label> 
                    <input type="text" name="un" id="idun" /> <br /><br /> 
                </div> 
                <div style={{ textAlign: 'right', marginRight: '30px' }}> 
                    <label htmlFor="idpw" style={{ marginRight: '500px' }}>Password:</label> 
                    <input type="password" name="pw" id="idpw" /><br /><br /><br /> 
                </div> 
                <button
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: "lightblue",
                        border: "1px solid #000",
                        color: "#000",
                        padding: "10px 20px",
                        fontSize: "16px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        outline: "none",
                    }}
                >
                    Login
                </button>
            </div> 
        </div> 
    ); 
}
