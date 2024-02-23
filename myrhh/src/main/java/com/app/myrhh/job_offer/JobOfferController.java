package com.app.myrhh.job_offer;

import com.app.myrhh.company.Company;
import com.app.myrhh.company.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-offers")
public class JobOfferController {

    private final JobOfferService jobOfferService;

    @Autowired
    public JobOfferController(JobOfferService jobOfferService) {
        this.jobOfferService = jobOfferService;

    }

    @PostMapping("/add")
    public JobOffer save(@RequestBody JobOffer jobOffer) {
        return jobOfferService.save(jobOffer);
    }

    @GetMapping("/find")
    public JobOffer findById(@RequestParam Long id) {
        return jobOfferService.findById(id);
    }


    @GetMapping()
    public ResponseEntity<JobOfferPaginationResponse> getAllJobOffers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "ASC") String sortDir) {
        return ResponseEntity.ok(jobOfferService.getAllJobOffers(page, size, sortBy, sortDir));
    }

    @GetMapping("/find/title")
    public ResponseEntity<List<JobOffer>> findJobOfferByTitle(@RequestParam String title) {
        return ResponseEntity.ok(jobOfferService.findJobOfferByTitle(title));
    }

    @GetMapping("/find/company")
    public ResponseEntity<List<JobOffer>> findJobOfferByCompany() {
        return ResponseEntity.ok(jobOfferService.findJobOfferByCompany());
    }

    @GetMapping("/find/pending")
    public ResponseEntity<JobOfferPaginationResponse> findJobOfferByPending(
            @RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir)
    {
        return ResponseEntity.ok(jobOfferService.getAllJobOffersByStatus( pageNo, pageSize, sortBy, sortDir));
    }

    @GetMapping("/update")
    public ResponseEntity<Boolean> updateJobOfferStatus(@RequestParam long id, @RequestParam String status) {
        return ResponseEntity.ok(jobOfferService.updateJobOfferStatus(id, status));
    }


}
