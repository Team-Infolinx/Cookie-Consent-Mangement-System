package com.Infolinx.cookie_consent_management_system.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name = "CookieCategory")
@Table(name = "cookie_category")
public class CookieCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id",nullable = false,updatable = false)
    private Long categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(
            mappedBy = "cookieCategory",
            fetch = FetchType.EAGER)
    @JsonBackReference
    private List<Cookie> cookies = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(
            name = "website_id",
            referencedColumnName = "website_id",
            foreignKey = @ForeignKey(name = "fk_website_id_c")
    )
    @JsonBackReference("website-cookieCategory")
    private Website website;
}
