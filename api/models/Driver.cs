using michaelimbriglio.MIS321.mai_pa3.interfaces;
using michaelimbriglio.MIS321.mai_pa3.api.models;
using michaelimbriglio.MIS321.mai_pa3.database;
namespace michaelimbriglio.MIS321.mai_pa3.api.models
{
    public class Driver
    {
        public int id {get; set;}
        public string name {get; set;}
        public int rating {get; set;}
        public System.DateTime dateHired {get; set;}
        public bool deleted {get; set;}
        public IAddDriver Save {get; set;}
        public IFireDriver fire {get; set;}

        public Driver()
        {
            Save = new AddDriver();
            fire = new FireDriver();
            dateHired = DateTime.Now;
        }

        public override string ToString()
        {
            return $"{name} was hired on {dateHired} and has a rating of {rating}";
        }


    }
}