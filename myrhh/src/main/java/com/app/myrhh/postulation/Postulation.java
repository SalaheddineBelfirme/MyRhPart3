package com.app.myrhh.postulation;

import com.app.myrhh.job_offer.JobOffer;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Postulation {
    @Id
    @GeneratedValue(generator = "postulation_id_seq")
    @SequenceGenerator(name = "postulation_id_seq", sequenceName = "postulation_id_seq", allocationSize = 1)
    private Long id;
    @ManyToOne
    private JobOffer jobOffer;
    @Lob
    @Column(name = "pdf_document")
    private byte[] pdfcv;



}
