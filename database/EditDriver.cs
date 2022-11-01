using MySql.Data.MySqlClient;
using michaelimbriglio.MIS321.mai_pa3.interfaces;
using michaelimbriglio.MIS321.mai_pa3.api.models;
namespace michaelimbriglio.MIS321.mai_pa3.database
{
    public class EditDriver : IEditDriver
    {
        public void editrating(Driver myDriver)
        {
            ConnectionString newConnection = new ConnectionString();
            string cs = newConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();


            string stm = @"UPDATE drivers set rating =@rating WHERE name=@name";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@name",myDriver.name);
            cmd.Parameters.AddWithValue("@rating",myDriver.rating);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}