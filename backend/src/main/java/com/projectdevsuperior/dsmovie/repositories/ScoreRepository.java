package com.projectdevsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectdevsuperior.dsmovie.entities.Score;
import com.projectdevsuperior.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
