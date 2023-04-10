package com.Infolinx.cookie_consent_management_system.service;

import com.Infolinx.cookie_consent_management_system.entity.Website;
import com.Infolinx.cookie_consent_management_system.repository.WebsiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebsiteService {

    private final WebsiteRepository websiteRepository;

    @Autowired
    public WebsiteService(WebsiteRepository websiteRepository) {
        this.websiteRepository = websiteRepository;
    }

    public Website addWebsite(Long userId, Website website) {
        website.setUserId(userId);
        return websiteRepository.save(website);
    }

    public List<Website> getWebsiteByUserId(Long userId) {
        return websiteRepository.getWebsitesByUserId(userId);
    }


    public String deleteWebsite(Long userId, Long websiteId) {
        Website website = websiteRepository.findById(websiteId).orElse(null);

        if (website != null) {
            if(website.getUserId() == userId) {
                websiteRepository.deleteById(websiteId);
                return (websiteId + " website is successfully deleted.");
            }
            return "Unsuccessful";
        }
        return "Unsuccessful";
    }

    public Website updateWebsite(Long userId, Long websiteId, Website updatedWebsite) {
        Website website = websiteRepository.findById((websiteId)).orElse(null);

        if (website != null) {
            if (website.getUserId() == userId) {
                website.setConfigName(updatedWebsite.getConfigName());
                website.setDomain(updatedWebsite.getDomain());
                return websiteRepository.save(website);
            }
            return null;
        }
        return null;
    }
}
