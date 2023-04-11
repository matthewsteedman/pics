import axios from "axios";

const searchImages = async (term) => {
  const  response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID -c5eNx4H7W5CXdDd4TIGibv9AgQjr1Bah_QGs05cThk'
        },
        params: {
            query: term,
        }
    })
    return response.data.results;
}

export default searchImages;