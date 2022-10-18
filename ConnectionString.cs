namespace michaelimbriglio.MIS321.mis321_pa3
{
    public class ConnectionString
    {
        public string cs {get; set;}

        public ConnectionString()
        {
            string server = "jbb8y3dri1ywovy2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "o4iwsmh016ikbwh4";
            string port = "3306";
            string userName = "wcckq7jmgnw11weo";
            string password = "jy3otfvq2iflw1k1";

            cs = $@"server = {server};user={userName};database={database};port={port};password={password};";
        }
    }
}