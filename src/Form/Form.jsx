import React from 'react'
import './Form.css'
function Form() {
    let flag=true
    const myForm=(e)=>{
e.preventDefault()  
if (flag){

    alert("Successfully sended!!") 
}else {
    document.getElementById("name").value="";
    document.getElementById('email').value=''
    document.getElementById("number").value='';
    document.getElementById("surname").value='';
    document.getElementById("comment").value=''
    alert("Successfully sended!!") 
}
 }
 flag=!flag

  return (
    <div className='main'>
        <form onSubmit={myForm}>

            <label htmlFor='name'>
                Name:
<input type="text" id="name" required placeholder='Lily'/>
            </label> <br /> <br />
            <label htmlFor="surname" >
                Surname:
                <input type="text" id="surname" required  placeholder='Corrigan'/>
            </label> <br /> <br />
            <label htmlFor="number">Phone number:
                <input type="tel" id="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='555-555-55-55' required/>
            </label><br /><br />
            <label htmlFor="email">Email:
                <input type="email" id='email' required placeholder='xxxxxxx@gmail.com'/>
            </label><br /><br />
            <label htmlFor="comment" >
                Comment:
                <br />
               <textarea id='comment' required rows={4} cols={30} placeholder='Write your comment here...'></textarea>
            </label> <br /><br />
            <button >Send</button>
        </form>
    </div>
  )
}

export default Form