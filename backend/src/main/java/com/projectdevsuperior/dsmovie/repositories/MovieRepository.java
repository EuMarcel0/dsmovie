package com.projectdevsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdevsuperior.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
