package com.Infolinx.cookie_consent_management_system.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String domain;


    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }
}
