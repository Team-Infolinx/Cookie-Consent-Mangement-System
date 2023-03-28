package com.Infolinx.cookie_consent_management_system.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "Cookie")
@Table(name = "cookie")
public class Cookie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(
            name = "cookie_id",
            nullable = false,
            updatable = false
    )
    private Long cookieId;

    @Column(name = "cookie_name")
    private String CookieName;

    @Column(name = "domain")
    private String domain;

    @Column(name = "path")
    private String path;

    @Column(name = "expire_date")
    private Date expireDate;

    @ManyToOne
    @JoinColumn(
            name = "website_id",
            nullable = false,
            referencedColumnName = "website_id",
            foreignKey = @ForeignKey(name = "fk_website_id")
    )
    @JsonBackReference("website-cookies")
    private Website website;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(
            name = "category_id",
            referencedColumnName = "category_id",
            foreignKey = @ForeignKey(name = "fk_category_id")
    )
    @JsonBackReference("cookie-category")
    private CookieCategory cookieCategory;
}
