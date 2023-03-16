package com.Infolinx.cookie_consent_management_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class user {

    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String domain;


}
