package com.rockClimbingRoutes.liveMap;

import javax.persistence.*;

//Entity donates that it exists in a JPA repository
@Entity
@Table(name = "rock_route_table_all", schema = "rock_routes_schema")
@NamedQuery(name = "RockRouteInfo.findByState",
            query = "Select r FROM RockRouteInfo r WHERE r.state = ?1"
)
public class RockRouteInfo {
    @Id
    @Column(name="name")
    public String name;

    @Column(name="type")
    public String type;

    @Column(name="stars")
    public String stars;

    @Column(name="rating")
    public String rating;

    @Column(name="pitches")
    public String pitches;

//    @Column(name="imgSmall")
//    public String imgSmall;

    @Column(name="latitude")
    public String latitude;

    @Column(name="longitude")
    public String longitude;

    @Column(name="location")
    public String location;



    @Column(name="state")
    public String state;

    public RockRouteInfo(String route){
        this.name = name;
    }
    public RockRouteInfo(){ }


    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public String getStars() {
        return stars;
    }

    public String getRating() {
        return rating;
    }

    public String getPitches() {
        return pitches;
    }

    public String getLatitude() {
        return latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public String getLocation() {
        return location;
    }

    public String getState() {
        return state;
    }

//    public void setRoute(String route){
//        this.route = route;
//    }
//    @Override
//    public String toString(){return this.route; }
}
