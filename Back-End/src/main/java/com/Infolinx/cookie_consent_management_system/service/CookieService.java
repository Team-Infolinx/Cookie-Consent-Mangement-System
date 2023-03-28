package com.Infolinx.cookie_consent_management_system.service;

import com.Infolinx.cookie_consent_management_system.entity.Cookie;
import com.Infolinx.cookie_consent_management_system.entity.Website;
import com.Infolinx.cookie_consent_management_system.repository.CookieRepository;
import com.Infolinx.cookie_consent_management_system.repository.WebsiteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CookieService {

    private final WebsiteRepository websiteRepository;
    private final CookieRepository cookieRepository;

    public CookieService(WebsiteRepository websiteRepository, CookieRepository cookieRepository) {
        this.websiteRepository = websiteRepository;
        this.cookieRepository = cookieRepository;
    }

    public List<Cookie> getCookiesToWebsite(Long websiteId) {
        Website website = websiteRepository.findById(websiteId).orElse(null);
        if (website != null){
            return website.getCookies();
        }
        return null;
    }

    public List<Cookie> addCookieCategoryToCookies(Long websiteId, List<Cookie> cookies) {
        Website website = websiteRepository.findById(websiteId).orElse(null);
        if (website != null){
            cookies.forEach(cookie -> {cookie.setWebsite(website);});
            website.setCookies(cookies);
            websiteRepository.save(website);
            cookieRepository.saveAll(website.getCookies());

            return website.getCookies();
        }
        return null;
    }
}
