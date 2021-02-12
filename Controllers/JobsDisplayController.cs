using System.Collections.Generic;
using FLScoreForeCast.Model;
using Microsoft.AspNetCore.Mvc;

namespace FLScoreForeCast.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsDisplayController : ControllerBase
    {
        [HttpPost("[action]")]
        public IEnumerable<SeekerInfo> GetDetails([FromBody]SeekerInfo info)
        {
            List<SeekerInfo> seekerInfo = new List<SeekerInfo>();

            //SearchData searchdata = new SearchData(startdate, enddate);
            //scoreForecast = FLScoreBoard.GetScorecards(searchdata);
            return seekerInfo.ToArray();
        }

        //public SummaryForecast GetList()
        //{
        //    SummaryForecast summaryForecast = new SummaryForecast();
        //    summaryForecast.Weekly = 10.0;
        //    summaryForecast.Monthly = 11.0;
        //    summaryForecast.Quaterly = 12.0;
        //    return summaryForecast;
        //}
    }
}
