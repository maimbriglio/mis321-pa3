using MySql.Data.MySqlClient;
using michaelimbriglio.MIS321.mai_pa3.interfaces;
using michaelimbriglio.MIS321.mai_pa3.api.models;
namespace michaelimbriglio.MIS321.mai_pa3.database
{
    public class FireDriver : IFireDriver
    {
        public void DisableDriver(Driver myDriver)
        {
            ConnectionString newConnection = new ConnectionString();
            string cs = newConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();


            string stm = @"UPDATE drivers set deleted = true WHERE name=@name";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@name",myDriver.name);
            // cmd.Parameters.AddWithValue("@deleted",myDriver.deleted);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}