package com.Infolinx.cookie_consent_management_system.controller;

import com.Infolinx.cookie_consent_management_system.entity.Cookie;
import com.Infolinx.cookie_consent_management_system.service.CookieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
public class CookieController {

    private final CookieService cookieService;

    @Autowired
    public CookieController(CookieService cookieService) {
        this.cookieService = cookieService;
    }

    @GetMapping("{websiteId}/getCookies")
    public List<Cookie> getCookiesToWebsite(@PathVariable(name = "websiteId") Long websiteId) {
        return this.cookieService.getCookiesToWebsite(websiteId);
    }

    @PutMapping("/{websiteId}/setCategories")
    public List<Cookie> addCookieCategoryToCookies(@PathVariable(name = "websiteId") Long websiteId, @RequestBody List<Cookie> cookies){
        return cookieService.addCookieCategoryToCookies(websiteId , cookies);
    }

}
