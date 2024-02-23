package com.app.myrhh.postulation;

import com.app.myrhh.job_offer.JobOffer;
import com.app.myrhh.job_offer.JobOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class PostulationService {
    private final PostulationRepository postulationRepository;
    private final JobOfferRepository jobOfferRepository;

    @Autowired
    public PostulationService(PostulationRepository postulationRepository, JobOfferRepository jobOfferRepository) {
        this.postulationRepository = postulationRepository;
        this.jobOfferRepository = jobOfferRepository;
    }

    public Postulation addPostulation(Long jobOfferId, MultipartFile pdfFile) throws IOException {
        JobOffer jobOffer = jobOfferRepository.findById(jobOfferId).orElseThrow(() -> new IllegalArgumentException("Job offer not found"));

        Postulation postulation = new Postulation();
        postulation.setJobOffer(jobOffer);
        postulation.setPdfcv(pdfFile.getBytes());

        return postulationRepository.save(postulation);
    }
}

