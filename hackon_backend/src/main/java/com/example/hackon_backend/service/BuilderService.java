package com.example.hackon_backend.service;

import com.example.hackon_backend.entity.Builder;
import com.example.hackon_backend.repository.BuilderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BuilderService {
    
    private final BuilderRepository builderRepository;
    
    public Builder saveBuilder(Builder builder) {
        return builderRepository.save(builder);
    }
}


