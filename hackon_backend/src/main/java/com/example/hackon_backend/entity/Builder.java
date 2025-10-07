package com.example.hackon_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "builders")
public class Builder {
    @Id
    private String participantId;
    
    private String name;
    private String email;
    private String companyName;
    private String skill;
    private String phoneNumber;
    private String jobTitle;
    private String referralSource;
}