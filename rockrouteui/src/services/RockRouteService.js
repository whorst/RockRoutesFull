
export default{
    getStateCenterAndZoomLevel(state){
        switch(state){
            case "Alabama":
                return 	{"latitude":"32.806671", "longitude" :"-86.791130", "zoom":7}
            case "Alaska":
                return 	{"latitude":"61.370716", "longitude" :"-152.404419", "zoom":4}
            case "Arizona":
                return 	{"latitude":"33.729759", "longitude" :"-111.431221", "zoom":7}
            case "Arkansas":
                return {"latitude":"34.969704",	"longitude" :"-92.373123", "zoom":8}
            case "California":
                return 	{"latitude":"36.116203", "longitude" :"-119.681564", "zoom":7}
            case "Colorado":
                return 	{"latitude":"39.059811", "longitude" :"-105.311104", "zoom":7}
            case "Connecticut":
                return 	{"latitude":"41.597782", "longitude" :"-72.755371", "zoom":9}
            case "Delaware":
                return {"latitude":"39.318523",	"longitude" :"-75.507141", "zoom":9}
            case "Florida":
                return {"latitude":"27.766279",	"longitude" :"-81.686783", "zoom":7}
            case "Georgia":
                return {"latitude":"33.040619",	"longitude" :"-83.643074", "zoom":7}
            case "Hawaii":
                return {"latitude":"21.094318",	"longitude" :"-157.498337", "zoom":7}
            case "Idaho":
                return {"latitude":"44.240459",	"longitude" :"-114.478828", "zoom":6}
            case "Illinois":
                return {"latitude":"40.349457",	"longitude" :"-88.986137", "zoom":7}
            case "Indiana":
                return {"latitude":"39.849426",	"longitude" :"-86.258278", "zoom":8}
            case "Iowa":
                return {"latitude":"42.011539",	"longitude" :"-93.210526", "zoom":7}
            case "Kansas":
                return {"latitude":"38.526600",	"longitude" :"-96.726486", "zoom":7}
            case "Kentucky":
                return {"latitude":"37.668140",	"longitude" :"-84.670067", "zoom":7}
            case "Louisiana":
                return {"latitude":"31.169546",	"longitude" :"-91.867805", "zoom":8}
            case "Maine":
                return {"latitude":"44.693947",	"longitude" :"-69.381927", "zoom":7}
            case "Maryland":
                return {"latitude":"39.063946",	"longitude" :"-76.802101", "zoom":8}
            case "Massachusetts":
                return {"latitude":"42.230171",	"longitude" :"-71.530106", "zoom":8}
            case "Michigan":
                return {"latitude":"43.326618",	"longitude" :"-84.536095", "zoom":7}
            case "Minnesota":
                return {"latitude":"45.694454",	"longitude" :"-93.900192", "zoom":7}
            case "Mississippi":
                return {"latitude":"32.741646",	"longitude" :"-89.678696", "zoom":7}
            case "Missouri":
                return {"latitude":"38.456085",	"longitude" :"-92.288368", "zoom":7}
            case "Montana":
                return {"latitude":"46.921925",	"longitude" :"-110.454353", "zoom":6}
            case "Nebraska":
                return {"latitude":"41.125370",	"longitude" :"-98.268082", "zoom":7}
            case "Nevada":
                return {"latitude":"38.313515",	"longitude" :"-117.055374", "zoom":7}
            case "New Hampshire":
                return {"latitude":"43.452492",	"longitude" :"-71.563896", "zoom":8}
            case "New Jersey":
                return {"latitude":"40.298904",	"longitude" :"-74.521011", "zoom":8}
            case "New Mexico":
                return {"latitude":"34.840515",	"longitude" :"-106.248482", "zoom":7}
            case "New York":
                return  {"latitude":"42.165726",	"longitude" :"-74.948051", "zoom":7}
            case "North Carolina":
                return  {"latitude":"35.630066",	"longitude" :"-79.806419", "zoom":7}
            case "North Dakota":
                return  {"latitude":"47.528912",	"longitude" :"-99.784012", "zoom":7}
            case "Ohio":
                return {"latitude":"40.388783",	"longitude" :"-82.764915", "zoom":7}
            case "Oklahoma":
                return {"latitude":"35.565342",	"longitude" :"-96.928917", "zoom":7}
            case "Oregon":
                return {"latitude":"44.572021",	"longitude" :"-122.070938", "zoom":7}
            case "Pennsylvania":
                return {"latitude":"40.590752",	"longitude" :"-77.209755", "zoom":7}
            case "Rhode Island":
                return  {"latitude":"41.680893",	"longitude" :"-71.511780", "zoom":8}
            case "South Carolina":
                return  {"latitude":"33.856892",	"longitude" :"-80.945007", "zoom":8}
            case "South Dakota":
                return  {"latitude":"44.299782",	"longitude" :"-99.438828", "zoom":7}
            case "Tennessee":
                return {"latitude":"35.747845",	"longitude" :"-86.692345", "zoom":7}
            case "Texas":
                return {"latitude":"31.054487",	"longitude" :"-97.563461", "zoom":6}
            case "Utah":
                return {"latitude":"40.150032",	"longitude" :"-111.862434", "zoom":7}
            case "Vermont":
                return {"latitude":"44.045876",	"longitude" :"-72.710686","zoom":8}
            case "Virginia":
                return {"latitude":"37.769337",	"longitude" :"-78.169968", "zoom":7}
            case "Washington":
                return {"latitude":"47.400902",	"longitude" :"-121.490494", "zoom":7}
            case "West Virginia":
                return {"latitude":"38.491226",	"longitude" :"-80.954453", "zoom":8}
            case "Wisconsin":
                return {"latitude":"44.268543",	"longitude" :"-89.616508", "zoom":7}
            case "Wyoming":
                return {"latitude":"42.755966",	"longitude" :"-107.302490", "zoom":7}
        }
    },

     getAllRockRoutes(){
            var myUrl = `http://localhost:8000/AllRockRoutes`;
            return fetch(myUrl)
            .then(response => response.json())
            .then(data =>  console.log(data))
            //Set State happens asynchronously and should be done as little as possible
    },
    async getStateRockRoutes(newState){
            let x;

            newState = newState.toLowerCase().replace(" ","_");
            var myUrl = `http://localhost:8000/StateRockRoutes?state=`+newState;
            await fetch(myUrl)
            .then(function(response){return response.json();})
            .then(function(data){
                x = data;
                console.log("???????????????",x);
                return x;
            })

            //Set State happens asynchronously and should be done as little as possible
    }
}