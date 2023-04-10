package com.Infolinx.cookie_consent_management_system.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "Website")
@Table(name = "website")
public class Website {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
            name = "website_id",
            nullable = false,
            updatable = false
    )
    private Long websiteId;
    private String configName;
    private String domain;
    private Long userId;

    @OneToMany(
            mappedBy = "website",
            orphanRemoval = true,
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL
    )
//    @JsonBackReference
    private List<Cookie> cookies = new ArrayList<>();

    @OneToMany(
            mappedBy = "website",
            cascade = CascadeType.REMOVE,
            fetch = FetchType.EAGER
    )
//    @JsonBackReference("website-category")
    private List<CookieCategory> cookieCategories = new ArrayList<>();

    public void addCookieCategoryToWebsite(CookieCategory cookieCategory){
        cookieCategory.setWebsite(this);
        cookieCategories.add(cookieCategory);
    }

}
