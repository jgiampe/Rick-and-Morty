

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPasswd = /\d/

export function validateUser(username)
{   
    let errors = '';

    if(username.length===0)
        errors= 'Debe insertar un mail'

    else if(username.length>35)
        errors = 'El mail es demasiado largo';

    else if(!regexEmail.test(username))
        errors = 'El usuario debe ser un mail';
    

        
    return errors;
    }
    
export function validatePass(password)
{
    let errors ='';
    if(!regexPasswd.test(password))
        errors = 'Debe incluir un número'
    else if(password.length<6 || password.length>10)
        errors = 'Debe tener entre 6 y 10 caracteres'


    return errors;
}