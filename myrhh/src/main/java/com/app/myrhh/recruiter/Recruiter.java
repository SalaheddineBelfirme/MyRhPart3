package com.app.myrhh.recruiter;

import com.app.myrhh.company.Company;
import com.app.myrhh.utils.Role;
import jakarta.persistence.*;

@Entity
public class Recruiter {

    @Id
    @GeneratedValue(generator = "recruiter_id_seq")
    @SequenceGenerator(name = "recruiter_id_seq", sequenceName = "recruiter_id_seq", allocationSize = 1)
    private Long id;

    private String fullName;
    @Column(unique = true)
    private String email;

    private String password;





    @ManyToOne
    private Company company;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Recruiter() {
    }

}
