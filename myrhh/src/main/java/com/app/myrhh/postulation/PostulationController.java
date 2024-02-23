package com.app.myrhh.postulation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/postulations")
public class PostulationController {

    private final PostulationService postulationService;

    @Autowired
    public PostulationController(PostulationService postulationService) {
        this.postulationService = postulationService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Postulation> addPostulation(
            @RequestParam("pdfFile") MultipartFile pdfFile,
            @RequestParam("jobOfferId") Long jobOfferId
    ) {
        try {
            Postulation savedPostulation = postulationService.addPostulation(jobOfferId, pdfFile);
            return new ResponseEntity<>(savedPostulation, HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
