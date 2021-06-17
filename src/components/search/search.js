import React from 'react'


function search({handleChangeInput, searchUserNameResult}) {

    return(
        
<div className="row">
  <div className="col">
    <input type="text" 
    className="form-control" 
    placeholder="Buscar por userName" 
    aria-label="First name" 
    onChange={e => handleChangeInput(e.target.value)} 
    value={searchUserNameResult}
    />
  </div>
 </div>
       
    )
}

export default search