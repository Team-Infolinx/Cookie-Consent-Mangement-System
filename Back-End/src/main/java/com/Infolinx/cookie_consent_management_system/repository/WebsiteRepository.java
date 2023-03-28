package com.Infolinx.cookie_consent_management_system.repository;

import com.Infolinx.cookie_consent_management_system.entity.Website;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WebsiteRepository extends JpaRepository<Website,Long> {

    @Query
    public List<Website> getWebsitesByUserId(Long userId);
}
