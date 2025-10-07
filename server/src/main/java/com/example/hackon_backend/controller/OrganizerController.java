package com.example.hackon_backend.controller;

import com.example.hackon_backend.entity.Organizer;
import com.example.hackon_backend.service.OrganizerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/organizers")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class OrganizerController {
    
    private final OrganizerService organizerService;
    
    @PostMapping
    public ResponseEntity<Organizer> registerOrganizer(@RequestBody Organizer organizer) {
        Organizer savedOrganizer = organizerService.saveOrganizer(organizer);
        return ResponseEntity.ok(savedOrganizer);
    }
}