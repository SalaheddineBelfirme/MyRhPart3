package com.app.myrhh.company;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Scanner;

@RestController
@RequestMapping("/api/company")
public class CompanyController {


    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }


    @PostMapping("/save")
    public Company save(@RequestBody Company company){
        return companyService.save(company);
    }

    @GetMapping
    public Company findByName(@RequestParam   String name){
        return companyService.findByName(name);
    }

    @GetMapping("/details/{id}")
    public Company getCompanyDetails(@PathVariable Long id) {
        return companyService.findById(id);
    }
}
