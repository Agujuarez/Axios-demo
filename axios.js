const obtenerPeliculas = async () => {
   try {
    const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
            //api_key: 'a16b3cfc665fb99e46caea9786506866',
            language: 'es-MX'
        },
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTZiM2NmYzY2NWZiOTllNDZjYWVhOTc4NjUwNjg2NiIsInN1YiI6IjY0YjI5ZWFhZTBjYTdmMDBhZTc1NGYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9DbBkbPz89K_qpTXR3E5ZuPRhThQHv5AA9RCnHZuR2o'
        }
    })  

    console.log(respuesta)
   } catch (error) {
    console.log(error)
   }
}

obtenerPeliculas()