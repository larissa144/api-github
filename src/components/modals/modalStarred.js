import React, {useEffect, useState} from 'react'
import getStarred from '../../service/get-starred'

function ModalStarred(user) {

const [starred, setStarred] = useState([])

useEffect(() => {
  getStarred(user.userName).then((response) => {
    setStarred(response)
  })
}, [])

return(
 <>
        
<button type="button" className="btn btn-primary btn-sm justify-content-between" data-bs-toggle="modal" data-bs-target="#modalStarred">
  Starred
</button>


<div className="modal fade" id="modalStarred" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className=" fw-normal modal-title text-primary" id="staticBackdropLabel">Starreds</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <span className='align-middle fw-normal fs-5'>Lista de repositórios mais visitados</span>
      <div className="modal-body">
        {starred.map((item, index) => 
          <div key={index}>
          <span className='fs-7 fw-light text-secondary'>{item.stargazers_url}</span>
          </div>
        )}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default ModalStarred