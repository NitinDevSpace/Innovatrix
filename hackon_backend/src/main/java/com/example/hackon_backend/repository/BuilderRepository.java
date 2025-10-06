package com.example.hackon_backend.repository;

import com.example.hackon_backend.entity.Builder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuilderRepository extends JpaRepository<Builder, String> {
}