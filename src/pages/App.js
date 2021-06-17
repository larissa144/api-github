import './App.css';
import getUser from '../service/get-user'
import ModalStarred from '../components/modals/modalStarred'
import ModalRepo from '../components/modals/modalRepo'
import Search from '../components/search/search'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'

const SearchDiv = styled.div`
width: 300px;
display: inline-block;
`
const ButtonDiv = styled.div`
margin: 10px 33px 0;
`
const InitialDiv = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
margin-bottom: 5px;
margin-top: 20px;
padding: 10px;
`
const CardsDiv = styled.div`
display: inline-block;
border-radius: 5px;
box-shadow: 0px 3px 6px #00000029;
align-items: center;
margin-bottom: 5px;
margin-top: 20px;
padding: 12px;
width: 250px;
`
const Image = styled.img`
border-radius: 50%;
width: 50px;
`

function App() {

  let {userNameUrl} = useParams()
  const [users, setUsers] = useState([])
  let [searchUserNameResult, setSearchUsernameResult] = useState(
		typeof window !== 'undefined' ? localStorage.getItem('searchUserNameResult') || '' : ''
	)

  useEffect(() => {
  
    if (userNameUrl){
      getUser(true, userNameUrl).then((response)=>{
        setUsers(new Array(response))
      })
    }else {
      getUser(false, '').then((response)=>{
        setUsers(response)
      })
    }
  },[])

  const handleChangeInput = event => setSearchUsernameResult(event)

  if (typeof window !== 'undefined') {
		localStorage.setItem('searchUserNameResult', searchUserNameResult)
	}

  let filteredResult =
  users &&
		users.filter(
			item =>
      item.login.toString().toLowerCase().includes(searchUserNameResult.toLowerCase())  
		)
   
  return (
    <>
    <InitialDiv>
      <span className='text-primary fs-3' alt='lista de usuários'>Lista de usuários </span>
      <SearchDiv>
        <Search handleChangeInput={handleChangeInput} searchUserNameResult={searchUserNameResult} alt='busca por userName'/>
      </SearchDiv>
    </InitialDiv>
  
    {filteredResult && filteredResult.map((item, index) =>
      <CardsDiv key={index}> 
      <Image src={item.avatar_url} alt='foto de perfil'/>
        <span className='fw-light fs-5 text-secondary' alt='userName'> {item.login}</span>
        <ButtonDiv>
          <ModalStarred userName={item.login} alt='modal de starred'/>
          <ModalRepo userName={item.login} alt='modal de repositorios' />
        </ButtonDiv>
     </CardsDiv>
    )}

    </>
  )
}

export default App
