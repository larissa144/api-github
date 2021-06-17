import React, {useEffect, useState} from 'react'
import getRepos from '../../service/get-repo'


function ModalRepo(user) {

  const [repos, setRepos] = useState([])

  useEffect(() => {
    getRepos(user.userName).then((response) => {
      setRepos(response)
    })
  }, [])

  return(
        <>
        
<button type="button" class="btn btn-primary btn-sm justify-content-between " data-bs-toggle="modal" data-bs-target="#modalRepo">
  Repositório
</button>


<div className="modal fade" id="modalRepo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className=" fw-normal modal-title text-primary" id="staticBackdropLabel">Repositórios</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <span className='align-middle fw-normal fs-5'>Lista de repositórios do usuário</span>
      {repos.map((item, index) => 
          <div key={index}>
          <span className='fs-7 fw-light text-secondary'>{item.url}</span>
          </div>
        )}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">fechar</button>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default ModalRepo