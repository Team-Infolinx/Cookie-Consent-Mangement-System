package com.Infolinx.cookie_consent_management_system.controller;

import com.Infolinx.cookie_consent_management_system.entity.Website;
import com.Infolinx.cookie_consent_management_system.service.WebsiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
public class WebsiteController {

    private final WebsiteService websiteService;

    @Autowired
    public WebsiteController(WebsiteService websiteService) {
        this.websiteService = websiteService;
    }

    @GetMapping("/{userId}/getWebsites")
    public List<Website> getAllWebsitesByUserId(@PathVariable(name = "userId") Long userId) {
        return websiteService.getWebsiteByUserId(userId);
    }

    @PostMapping("/{userId}/addWebsite")
    public Website addWebsite(@PathVariable(name = "userId") Long userId, @RequestBody Website website){
        return websiteService.addWebsite(userId,website);
    }

    @DeleteMapping("/{userId}/{websiteId}/deleteWebsite")
    public String deleteWebsite(
            @PathVariable(name = "userId") Long userId,
            @PathVariable(name = "websiteId") Long websiteId
    ){
        return websiteService.deleteWebsite(userId,websiteId);
    }
}
