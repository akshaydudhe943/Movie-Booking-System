package com.example.MovieBookingSystem.service;

import com.example.MovieBookingSystem.model.Movie;
import com.example.MovieBookingSystem.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    public Movie save(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie findById(String id) {
        return movieRepository.findById(id).orElse(null);
    }

    public void deleteById(String id) {
        movieRepository.deleteById(id);
    }
}
