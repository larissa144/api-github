import baseUrl from './baseUrl'

const getRepos = async username => {
    try{
        let response = await baseUrl.get(`/users/${username}/repos`, {
            headers:{
                Authorization:'token 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'
            }
        })
        return await response.data

    } catch(err) {
       return err.response

    }
}

export default getRepos