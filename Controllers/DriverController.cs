using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Microsoft.AspNetCore.Cors;
using michaelimbriglio.MIS321.mai_pa3.api.models;
using michaelimbriglio.MIS321.mai_pa3;
using michaelimbriglio.MIS321.mai_pa3.interfaces;
using michaelimbriglio.MIS321.mai_pa3.database;
using mai_pa3;

namespace mai_pa3.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        // GET: api/ToDos
        [EnableCors("OpenPolicy")]
        [HttpGet(Name="GetDrivers")]
        public List<Driver> Get()
        {
            List<Driver> allDrivers = new List<Driver>();

            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            try {

            string stm = "SELECT * FROM drivers";
            using var cmd = new MySqlCommand(stm, con);

            MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read())
            {
                Driver temp = new Driver(){id=rdr.GetInt32(0), name=rdr.GetString(1), dateHired=rdr.GetDateTime(2), rating=rdr.GetInt32(3), deleted=rdr.GetBoolean(4)};
                allDrivers.Add(temp);
            }

            return allDrivers;
            } catch(Exception){
                return new List<Driver>();
            } finally{
                con.Close();
            }
        }

        // GET: api/ToDos/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ToDos
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post([FromBody] Driver value)
        {
            IAddDriver addDriver = new AddDriver();
            addDriver.CreateDriver(value);
        }

        // PUT: api/ToDos/5
        [EnableCors("OpenPolicy")]
        [HttpPut]
        public void Put([FromBody] Driver value)
        {
            IEditDriver editDriver = new EditDriver();
            editDriver.editrating(value);
        }

        // DELETE: api/ToDos/5
        [EnableCors("OpenPolicy")]
        [HttpDelete]
        public void Delete([FromBody] Driver value)
        {
            IFireDriver fireDriver = new FireDriver();
            fireDriver.DisableDriver(value);
        }
    }
}