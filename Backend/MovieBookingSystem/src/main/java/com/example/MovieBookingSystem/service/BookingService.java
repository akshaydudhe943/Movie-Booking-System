package com.example.MovieBookingSystem.service;

import com.example.MovieBookingSystem.model.Booking;
import com.example.MovieBookingSystem.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking save(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> findByUserId(String userId) {
        return bookingRepository.findByUserId(userId);
    }

    public List<Booking> findAll() {
        return bookingRepository.findAll();
    }
}

