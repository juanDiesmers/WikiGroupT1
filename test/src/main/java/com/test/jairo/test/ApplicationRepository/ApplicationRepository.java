package com.test.jairo.test.ApplicationRepository;

import org.springframework.data.repository.CrudRepository;

import com.test.jairo.test.entity.Application;

public interface ApplicationRepository extends CrudRepository<Application, Long> {

}