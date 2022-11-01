using MySql.Data.MySqlClient;
using michaelimbriglio.MIS321.mai_pa3.interfaces;
using michaelimbriglio.MIS321.mai_pa3.api.models;

namespace michaelimbriglio.MIS321.mai_pa3.database
{
    public class AddDriver : IAddDriver
    {
        public static void CreateDriverTable()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"CREATE TABLE drivers(id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT, dateHired TEXT, rating INTEGER, deleted BOOL)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();
        }

        public void CreateDriver(Driver myDriver)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO drivers(name, dateHired, rating, deleted) VALUES(@name, @dateHired, @rating, @deleted)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@name", myDriver.name);
            cmd.Parameters.AddWithValue("@rating", myDriver.rating);
            cmd.Parameters.AddWithValue("@dateHired", myDriver.dateHired);
            cmd.Parameters.AddWithValue("@deleted", myDriver.deleted);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }

        public void SaveDriver(Driver myDriver)
        {
            throw new NotImplementedException();
        }
    }
}