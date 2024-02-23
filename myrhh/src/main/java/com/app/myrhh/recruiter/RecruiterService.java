package com.app.myrhh.recruiter;


import com.app.myrhh.company.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecruiterService {

    private final RecruiterRepository recruiterRepository;

    @Autowired
    public RecruiterService(RecruiterRepository recruiterRepository) {
        this.recruiterRepository = recruiterRepository;
    }

    public Recruiter save(Recruiter recruiter){
        return recruiterRepository.save(recruiter);
    }

    public Recruiter findByCompany(Company company){
        return recruiterRepository.findByCompany(company);
    }
}
