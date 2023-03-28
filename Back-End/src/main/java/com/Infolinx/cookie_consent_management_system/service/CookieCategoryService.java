package com.Infolinx.cookie_consent_management_system.service;

import com.Infolinx.cookie_consent_management_system.entity.CookieCategory;
import com.Infolinx.cookie_consent_management_system.entity.Website;
import com.Infolinx.cookie_consent_management_system.repository.CookieCategoryRepository;
import com.Infolinx.cookie_consent_management_system.repository.WebsiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CookieCategoryService {

    private final CookieCategoryRepository cookieCategoryRepository;
    private final WebsiteRepository websiteRepository;

    @Autowired
    public CookieCategoryService(CookieCategoryRepository cookieCategoryRepository, WebsiteRepository websiteRepository) {
        this.cookieCategoryRepository = cookieCategoryRepository;
        this.websiteRepository = websiteRepository;
    }
    public List<CookieCategory> getCookieCategories(Long websiteId) {
        Website website = websiteRepository.findById(websiteId).orElse(null);
        if (website != null) {
            return cookieCategoryRepository.getCookieCategoriesByWebsiteEquals(website);
        }
        return null;
    }
    public CookieCategory addNewCategory(Long websiteId , CookieCategory cookieCategory) {
        Website website = websiteRepository.findById(websiteId).orElse(null);
        if (website != null) {
            List<String> cookieCategoryNames = cookieCategoryRepository.getCookieCategoryNamesByWebsite(website);
            if(!cookieCategoryNames.contains(cookieCategory.getCategoryName())){
                website.addCookieCategoryToWebsite(cookieCategory);
                cookieCategoryRepository.save(cookieCategory);
                return cookieCategory;
            }
            return null;
        }
        return null;
    }

    public String deleteCookieCategory(Long websiteId, Long categoryId) {
        Website website = websiteRepository.findById(websiteId).orElse(null);
        CookieCategory cookieCategory = cookieCategoryRepository.findById(categoryId).orElse(null);
        if (website != null && cookieCategory != null) {
            CookieCategory deleteCategory = cookieCategoryRepository.findByCategoryIdAndWebsite(categoryId,website);
            cookieCategoryRepository.delete(deleteCategory);
            return (categoryId + " is Successfully deleted.");
        }
        return "Unsuccessful";
    }
}
