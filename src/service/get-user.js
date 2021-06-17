import baseUrl from './baseUrl'

const getUser = async (filterByUserName, userName) => {

    let url = ''
    if(filterByUserName) url = `/users/${userName}`
    else url = '/users?per_page=30'
    
    try{
    let response = await baseUrl.get(url, {
        headers:{
            Authorization:'token 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'
        }
    })
       return await response.data

    } catch(err) {
       return err.response

    }
}

export default getUser