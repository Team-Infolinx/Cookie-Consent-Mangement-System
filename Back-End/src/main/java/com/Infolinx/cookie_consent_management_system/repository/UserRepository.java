package com.Infolinx.cookie_consent_management_system.repository;

import com.Infolinx.cookie_consent_management_system.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
