namespace michaelimbriglio.MIS321.mis321_pa3
{
    public class ConnectionString
    {
        public string cs {get; set;}

        public ConnectionString()
        {
            string server = "jbb8y3dri1ywovy2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "b73jl890cml4qhad";
            string port = "3306";
            string userName = "xfsb7ph19q7f6vt5";
            string password = "tce7u5d3e80ljto4";

            cs = $@"server = {server};user={userName};database={database};port={port};password={password};";
        }
    }
}