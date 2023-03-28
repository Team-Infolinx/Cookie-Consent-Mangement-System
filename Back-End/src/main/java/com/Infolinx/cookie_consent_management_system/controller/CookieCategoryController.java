package com.Infolinx.cookie_consent_management_system.controller;

import com.Infolinx.cookie_consent_management_system.entity.CookieCategory;
import com.Infolinx.cookie_consent_management_system.service.CookieCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
public class CookieCategoryController {

    private final CookieCategoryService cookieCategoryService;

    @Autowired
    public CookieCategoryController(CookieCategoryService cookieCategoryService) {
        this.cookieCategoryService = cookieCategoryService;
    }

    @GetMapping("/{websiteId}/getCookieCategories")
    public List<CookieCategory> getCookieCategories(
            @PathVariable(name = "websiteId") Long websiteId
    ){
        return cookieCategoryService.getCookieCategories(websiteId);
    }

    @PostMapping("/{websiteId}/addCookieCategory")
    public CookieCategory addNewCategory(@PathVariable(name = "websiteId") Long websiteId , @RequestBody CookieCategory cookieCategory) {
        return cookieCategoryService.addNewCategory(websiteId , cookieCategory);
    }


    @DeleteMapping("/{websiteId}/{categoryId}/deleteCategory")
    public String deleteCookieCategory(
            @PathVariable(name = "websiteId") Long websiteId,
            @PathVariable(name = "categoryId") Long categoryId
    ){
        return cookieCategoryService.deleteCookieCategory(websiteId,categoryId);
    }
}
