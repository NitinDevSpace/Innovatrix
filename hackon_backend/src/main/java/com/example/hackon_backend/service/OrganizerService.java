package com.example.hackon_backend.service;

import com.example.hackon_backend.entity.Organizer;
import com.example.hackon_backend.repository.OrganizerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrganizerService {
    
    private final OrganizerRepository organizerRepository;
    
    public Organizer saveOrganizer(Organizer organizer) {
        return organizerRepository.save(organizer);
    }
}