using MySql.Data.MySqlClient;
using michaelimbriglio.MIS321.mai_pa3.interfaces;
using michaelimbriglio.MIS321.mai_pa3.api.models;

namespace michaelimbriglio.MIS321.mai_pa3.database
{
    public class ReadData : IReadAllData
    {
        public List<Driver> getAllDrivers()
        {
            List<Driver> allDrivers = new List<Driver>();

            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM drivers";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read())
            {
                Driver temp = new Driver(){id=rdr.GetInt32(0), name=rdr.GetString(1), dateHired=rdr.GetDateTime(2), rating=rdr.GetInt32(3), deleted=rdr.GetBoolean(4)};
                allDrivers.Add(temp);
            }

            foreach(Driver driver in allDrivers)
            {
                System.Console.WriteLine(driver.ToString());
            }
            return allDrivers;
        }
    }
}