package com.rockClimbingRoutes.liveMap.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.rockClimbingRoutes.liveMap.RockRouteInfo;
import com.rockClimbingRoutes.liveMap.repository.RockClimbingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.*;
import java.util.concurrent.CompletableFuture;

import java.io.IOException;
import java.sql.*;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

@Service
public class RockRoutesService {

    @Autowired
    static ObjectMapper JsonObjectMapper;

    @Autowired

    RockClimbingRepository rockClimbingRepository;

    private static String driverName = "com.mysql.cj.jdbc.Driver";
    static Connection con = null;

    public List<RockRouteInfo> returnAllRockRoutes() {
        return rockClimbingRepository.findAll();
    }

    public List<RockRouteInfo> returnStateRockRoutes(String state) throws  ExecutionException, InterruptedException {
        List<RockRouteInfo> stateRockRoutes;
        Pageable firstPageWithElements = PageRequest.of(0, 400);
        Page<RockRouteInfo> stateRockRoutesSlice = rockClimbingRepository.findByState(state, firstPageWithElements);

        List<Integer> intList = new ArrayList<Integer>();
        for(int i=0; i<=stateRockRoutesSlice.getTotalPages(); i++){
            intList.add(i);
        }

        List<CompletableFuture<Page<RockRouteInfo>>> futures = getCompletableFutures(state, intList);
        List<RockRouteInfo> results = new ArrayList<>();
        getCompletableFuturesContent(futures, results);
//        Instant starts = Instant.now();
//        int i=1;
//        PT0.464S
//        while(stateRockRoutesSlice.hasNext()){
//            Pageable newPage = PageRequest.of(i,100);
//            stateRockRoutesSlice = rockClimbingRepository.findByState(state, newPage);
//            stateRockRoutes = Stream.concat(stateRockRoutes.stream(),stateRockRoutesSlice.stream())
//                    .collect(Collectors.toList());
//            i+=1;
//        }
//        Instant ends = Instant.now();
        sortRockRoutes(results);
        return results;
    }

    private void sortRockRoutes(List<RockRouteInfo> results) {
        Collections.sort(results, new Comparator<RockRouteInfo>() {
            @Override
            public int compare(RockRouteInfo routeOne, RockRouteInfo routeTwo) {
                return routeOne.getName().compareTo(routeTwo.getName());
            }
        });
    }

    private void getCompletableFuturesContent(List<CompletableFuture<Page<RockRouteInfo>>> futures, List<RockRouteInfo> results) throws InterruptedException, ExecutionException {
        int futureLength = futures.size();
        for(int j=0; j<futureLength; j+=1){
            List<RockRouteInfo> futuresList = futures.get(j).get().getContent();
            if(futuresList.size() > 0){
                results.addAll(futuresList);
            }
        }
    }

    private List<CompletableFuture<Page<RockRouteInfo>>> getCompletableFutures(String state, List<Integer> intList) throws ExecutionException, InterruptedException {
        List<CompletableFuture<Page<RockRouteInfo>>> futures = intList.stream()
                .map(integer -> CompletableFuture.completedFuture(integer).thenApplyAsync(s -> {
                    return rockClimbingRepository.findByState(state, PageRequest.of(s, 400));
                }))
                .collect(Collectors.toList());
        CompletableFuture<Void> allOf = CompletableFuture.allOf(futures.toArray(new CompletableFuture[futures.size()]));
        allOf.join();
        return futures;
    }

    public <T> List<T> flattenListOfListsStream(List<List<T>> list) {
        return list.stream()
                .flatMap(Collection::stream)
                .collect(Collectors.toList());
    }

    static JsonNode ReturnJsonNodeFromString(String JsonString) throws IOException {
        return JsonObjectMapper.readTree(JsonString);
    }
}
