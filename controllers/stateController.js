const axios = require("axios");

exports.showStateWithData = async (req, res, next) =>
{
  try
  {
      let theState = req.url.toLowerCase() //lowercase state name comes from URL, starting with "/" for examlple, "/ny" or "ca"
      let method = req.params.method
      let result = await axios.get(`https://covidtracking.com/api/v1/states${theState}/current.json`)//("https://covidtracking.com/api/v1/states/daily.json")
      let covidData = result['data']
      res.render(theState.substring(1,3),{covidData:covidData})

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
