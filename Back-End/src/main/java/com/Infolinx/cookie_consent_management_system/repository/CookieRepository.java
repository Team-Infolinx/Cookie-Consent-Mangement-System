package com.Infolinx.cookie_consent_management_system.repository;

import com.Infolinx.cookie_consent_management_system.entity.Cookie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CookieRepository extends JpaRepository<Cookie,Long> {
}
