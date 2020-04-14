package com.rockClimbingRoutes.liveMap.repository;
import com.rockClimbingRoutes.liveMap.RockRouteInfo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface RockClimbingRepository extends PagingAndSortingRepository<RockRouteInfo, String> {

    public List<RockRouteInfo> findAll();
    public Page<RockRouteInfo> findByState(@Param("state") String state, Pageable firstPageWithTwoElements);
}
