package com.app.myrhh.job_offer;

import com.app.myrhh.company.Company;
import com.app.myrhh.company.CompanyService;
import com.app.myrhh.config.JwtService;
import com.app.myrhh.utils.EmailSenderService;
import com.app.myrhh.utils.JobOfferNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;

@Service
public class JobOfferService {


    private final JobOfferRepository jobOfferRepository;

    private final EmailSenderService emailSenderService;

    private final CompanyService companyService;

    private final JwtService jwtService;



    @Autowired
    public JobOfferService(JobOfferRepository jobOfferRepository, EmailSenderService emailSenderService, CompanyService companyService, JwtService jwtService) {
        this.jobOfferRepository = jobOfferRepository;
        this.emailSenderService = emailSenderService;
        this.companyService = companyService;
        this.jwtService = jwtService;
    }

    public JobOffer save(JobOffer jobOffer) {
        Company company = getCurrentCompany();
        jobOffer.setCompany(company);
        // send email to admin when a job offer is created
        emailSenderService.sendEmail("najouabelhaj7@gmail.com", "New Job Offer", "A new job offer has been created" +
                "\n For the position of " + jobOffer.getProfile() +" \n Please Login to this Link to see the details : http://localhost:4200/auth/admin");
        return jobOfferRepository.save(jobOffer);
    }

    private Company getCurrentCompany() {
        String token = jwtService.getToken();
        String email = jwtService.extractUserName(token);
        return companyService.findByEmail(email);
    }

    public JobOffer findById(Long id) {
        return jobOfferRepository.findById(id).get();
    }

    public List<JobOffer> findAll() {
        return jobOfferRepository.findAll();
    }

    public List<JobOffer> findJobOfferByTitle(String title) {

        return jobOfferRepository.findJobOfferByTitleContains(title).orElseThrow(() -> new JobOfferNotFoundException("Job offer with title " + title + " does not exists"));
    }

    public List<JobOffer> findJobOfferByCompany() {
        return jobOfferRepository.findJobOffersByCompany(getCurrentCompany()).orElseThrow(() -> new JobOfferNotFoundException("Job offer with this company does not exists"));
    }

    public JobOffer updateJobOffer(JobOffer jobOffer) {
        return jobOfferRepository.save(jobOffer);
    }

    public void deleteJobOffer(Long id) {
        jobOfferRepository.deleteById(id);
    }

    public JobOfferPaginationResponse getAllJobOffersByStatus(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        // create Pageable instance
        PageRequest pageable = PageRequest.of(pageNo, pageSize, sort);
        Page<JobOffer> pagedResult = jobOfferRepository.findAll(pageable);


        List<JobOffer> jobOffers = pagedResult.getContent().stream().filter(jobOffer -> jobOffer.getStatus().equals("pending")).toList();

        return new JobOfferPaginationResponse(jobOffers, pagedResult.getNumber(), pagedResult.getSize(), pagedResult.getTotalElements(), pagedResult.getTotalPages(), pagedResult.isLast());
    }

    public JobOfferPaginationResponse getAllJobOffers(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        // create Pageable instance
        PageRequest pageable = PageRequest.of(pageNo, pageSize, sort);
        Page<JobOffer> pagedResult = jobOfferRepository.findAll(pageable);

        List<JobOffer> jobOffers = pagedResult.getContent().stream().filter(jobOffer -> jobOffer.getStatus().equals("valid")).toList();

        return new JobOfferPaginationResponse(jobOffers, pagedResult.getNumber(), pagedResult.getSize(), pagedResult.getTotalElements(), pagedResult.getTotalPages(), pagedResult.isLast());
    }

    public boolean updateJobOfferStatus(long id,String status) {
        JobOffer jobOffer = jobOfferRepository.findById(id).get();
        if (jobOffer.getStatus().equals("pending")) {
            jobOffer.setStatus(status);
            jobOfferRepository.save(jobOffer);
            return true;
        } else {
            return false;
        }
    }
}
