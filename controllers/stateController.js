const axios = require("axios");

exports.showStateWithData = async (req, res, next) =>
{
  try
  {
      let method = req.params.method
      let result = await axios.get(`https://covidtracking.com/api/v1/states${req.url}/current.json`)//("https://covidtracking.com/api/v1/states/daily.json")
      let covidData = result['data']
      res.render(req.url.substring(1,3),{covidData:covidData})

      // if (method=="json")
      // {
      //    res.json(covidData)
      //  }
      //  else
      //  {
      //    res.render('ny',{covidData:covidData})
      //  }
    }
    catch(e)
    {
      next(e)
    }
};
