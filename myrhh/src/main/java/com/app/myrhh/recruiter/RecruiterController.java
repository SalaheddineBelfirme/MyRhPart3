package com.app.myrhh.recruiter;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recruiter")
public class RecruiterController {

    private final RecruiterService recruiterService;

    public RecruiterController(RecruiterService recruiterService) {
        this.recruiterService = recruiterService;
    }

    @RequestMapping("/save")
    public Recruiter save(Recruiter recruiter){
        return recruiterService.save(recruiter);
    }


}
