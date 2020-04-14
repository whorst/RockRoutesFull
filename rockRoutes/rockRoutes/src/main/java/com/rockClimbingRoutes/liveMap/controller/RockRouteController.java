package com.rockClimbingRoutes.liveMap.controller;

import com.rockClimbingRoutes.liveMap.RockRouteInfo;
import com.rockClimbingRoutes.liveMap.service.RockRoutesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
public class RockRouteController {
    @Autowired
    RockRoutesService rockRoutesService;

    @RequestMapping("/AllRockRoutes")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<RockRouteInfo> getAllRockRoutes() throws ClassNotFoundException, SQLException, InstantiationException, IOException, IllegalAccessException {
        List<RockRouteInfo> x = rockRoutesService.returnAllRockRoutes();
        return x;
    }

    @RequestMapping("/StateRockRoutes")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<RockRouteInfo> getStateRockRoutes(@RequestParam(required=true) String state) throws ClassNotFoundException, SQLException, InstantiationException, IOException, IllegalAccessException {
        List<RockRouteInfo> x = null;
        try {
            x = rockRoutesService.returnStateRockRoutes(state);
        } catch (ExecutionException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return x;
    }

//    @RequestMapping("/StateRockRoutes")
//    public List<RockRouteInfo> getStateRockRoutes(@RequestParam String state) throws ClassNotFoundException, SQLException, InstantiationException, IOException, IllegalAccessException {
//        return rockRoutesService.returnAllRockRoutesFromState(state);
//    }

}
