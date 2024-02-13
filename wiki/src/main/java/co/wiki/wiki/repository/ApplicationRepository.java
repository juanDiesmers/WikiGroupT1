package co.wiki.wiki.repository;

import org.springframework.data.repository.CrudRepository;

import co.wiki.wiki.entity.Application;


public interface ApplicationRepository extends CrudRepository<Application, Long>{

    
}