package com.example.MovieBookingSystem.controller;

import com.example.MovieBookingSystem.model.Booking;
import com.example.MovieBookingSystem.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.save(booking);
    }

    @GetMapping("/{userId}")
    public List<Booking> getBookingsByUserId(@PathVariable String userId) {
        return bookingService.findByUserId(userId);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.findAll();
    }
}
