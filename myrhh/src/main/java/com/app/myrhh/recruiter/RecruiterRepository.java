package com.app.myrhh.recruiter;

import com.app.myrhh.company.Company;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruiterRepository
        extends org.springframework.data.jpa.repository.JpaRepository<Recruiter, Long> {

    public Recruiter findByCompany(Company company);


}
