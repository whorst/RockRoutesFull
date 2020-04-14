package com.rockClimbingRoutes.liveMap;

import com.rockClimbingRoutes.liveMap.repository.RockClimbingRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = RockClimbingRepository.class)
@EnableAutoConfiguration
@EnableTransactionManagement
public class RockRoutesApplication  {

	public static void main(String[] args) {
		SpringApplication.run(RockRoutesApplication.class, args);
	}

}
