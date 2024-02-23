package com.app.myrhh.job_offer;

import com.app.myrhh.company.Company;
import jakarta.persistence.*;

@Entity
public class JobOffer{

    @Id
    @GeneratedValue(generator = "job_offer_id_seq")
    @SequenceGenerator(name = "job_offer_id_seq", sequenceName = "job_offer_id_seq", allocationSize = 1)
    private Long id;

    private String title;

    private String description;

    private String location;

    private String contractType;

    private String salary;

    private String profile;

    private String educationLevel;

    private int experienceLevel;

    private String status = "pending";

    @ManyToOne
    private Company company;

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getEducationLevel() {
        return educationLevel;
    }

    public void setEducationLevel(String educationLevel) {
        this.educationLevel = educationLevel;
    }

    public int getExperienceLevel() {
        return experienceLevel;
    }

    public void setExperienceLevel(int experienceLevel) {
        this.experienceLevel = experienceLevel;
    }

    public JobOffer(){

    }
    public JobOffer(String title, String description, String location, String contractType, String salary, String profile, String educationLevel, int experienceLevel) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.contractType = contractType;
        this.salary = salary;
        this.profile = profile;
        this.educationLevel = educationLevel;
        this.experienceLevel = experienceLevel;
    }

    @Override
    public String toString() {
        return "JobOffer{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", contractType='" + contractType + '\'' +
                ", salary='" + salary + '\'' +
                ", profile='" + profile + '\'' +
                ", educationLevel='" + educationLevel + '\'' +
                ", experienceLevel=" + experienceLevel +
                ", status='" + status + '\'' +
                ", company=" + company.toString() +
                '}';
    }
}
