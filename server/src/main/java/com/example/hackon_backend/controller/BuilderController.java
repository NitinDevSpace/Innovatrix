package com.example.hackon_backend.controller;

import com.example.hackon_backend.entity.Builder;
import com.example.hackon_backend.service.BuilderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/builders")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BuilderController {
    
    private final BuilderService builderService;
    
    @PostMapping
    public ResponseEntity<Builder> registerBuilder(@RequestBody Builder builder) {
        Builder savedBuilder = builderService.saveBuilder(builder);
        return ResponseEntity.ok(savedBuilder);
    }
}