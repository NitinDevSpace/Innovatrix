package com.example.hackon_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "organizers")
public class Organizer {
    @Id
    private String organizerId;
    
    private String instituteType;
    private String instituteName;
    private String email;
    private String phone;
    private String jobTitle;
    private String hackathonType;
}