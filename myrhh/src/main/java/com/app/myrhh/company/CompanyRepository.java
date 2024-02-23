package com.app.myrhh.company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

     Optional<Company> findByEmail(String email);

    Company findByName(String name);
}
