using MySql.Data.MySqlClient;
namespace michaelimbriglio.MIS321.mis321_pa3
{
    public class AddDriver
    {
        public static void CreateDriverTable()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"CREATE TABLE books(id INTEGER PRIMARY KEY AUTO_INCREMENT, title TEXT, author TEXT)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();
        }
    }
}