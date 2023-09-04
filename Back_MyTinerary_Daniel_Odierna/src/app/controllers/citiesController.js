import citiesList from '../../../citiesList.js'
import City from '../models/cities.js'

const citiesController = {


  
    getAllCities: (req, res, next) => {
      try{
        res.json({
       
            response: citiesList,
            success: true,
            error: null
        
        })
      } catch (error) {
            console.log(err)
            success = false;
            error
            next(error)
       }
    },

    getOneCity: (req, res, next) => {
      console.log(req.params)
        const { name }= req.params
        const city = citiesList.find(city => city.name == name)
        console.log(city)

        res.json({
            response: city,
            success: true,
            error: null
        
        })
      
    },

  ////ver
      // try {
      //     eventos = await Event.findById(id)
     

    createOneCity: async (req, res, next) => {
     console.log(req.body)
     let city;
     let error= null
     let success= true;
     
       try {
        
        city = await City.create(req.body)
        console.log(city);

    } catch (err) { 
        console.log(err);
        success = false;
        error= err;
        
        }
        res.json({
            response: City,
            success,
            error
            })
    },



}


export default citiesController
