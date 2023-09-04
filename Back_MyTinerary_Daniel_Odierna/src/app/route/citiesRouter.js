import { Router } from 'express';
import citiesController from '../controllers/citiesController.js';
const {getAllCities, getOneCity, createOneCity} = citiesController


const citiesRouter = Router();


citiesRouter.get('/', (req, res) => {
   try{
      res.json({
        status: 'Cities Works!' 
        
})
   }catch(error){
      res.status(500).json({error: error.message})
   }
});

citiesRouter.get('/cities', getAllCities);

citiesRouter.get('/cities/city:name', getOneCity);

citiesRouter.post('/cities/city', createOneCity); 




// const createCity = async (req, res) => {
//    try{
//       res.json({body: req.body})
//    }catch(error){
//       res.status(500).json({error: error.message})
//    }
// }

// citiesRouter.get('/Cities', async (req, res) => {

//    const cities = CitiesList.find({ name : req.body.name });
//    console.log(cities);
//    res.json(cities);

// });

// citiesRouter.get('/Cities:id', async (req, res) => {
//    const getOneCity = await Cities.findById(req.params.id);
//    res.json(getOneCity);

// });

// citiesRouter.post('/Cities', async (req, res) => {
//    const { img, name, country, population, currency, tourist_spots } = req.body;
//    const city = new city({ img, name, country, population, currency, tourist_spots });
//    await city.save();
//    res.json({ status: 'City Saved' });

// });

// citiesRouter.put('/Cities/:id', async (req, res) => {
//    const { img, name, country, population, currency, tourist_spots } = req.body;
//    const newCity = { img, name, country, population, currency, tourist_spots };
//    await City.findByIdAndUpdate(req.params.id, newCity);
//    res.json({ status: 'City Updated' });
// });

// citiesRouter.delete('/Cities/:id', async (req, res) => {
//    await City.findByIdAndRemove(req.params.id);
//    res.json({ status: 'City Deleted' });
// });




/*anidamiento de las rutas*/
// indexRouter.get("/", getAllCities)

// indexRouter.get("/:id", getOneCity)

export default citiesRouter;