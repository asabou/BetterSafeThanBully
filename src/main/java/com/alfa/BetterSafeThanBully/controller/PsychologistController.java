package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.Psychologist;
import com.alfa.BetterSafeThanBully.service.IPsychologistService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/psychologist")
public class PsychologistController {
    private final IPsychologistService psychologistService;

    public PsychologistController(IPsychologistService psychologistService) {
        this.psychologistService = psychologistService;
    }

    @GetMapping("/login/{username}")
    private ResponseEntity<?> login(@PathVariable("username") String username) {
        Optional<Psychologist> psychologistOptional = psychologistService.findByUsername(username);
        if (psychologistOptional.isPresent()) {
            return new ResponseEntity<>(psychologistOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("not found!", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/save")
    private ResponseEntity<?> savePsychologist(@RequestBody Psychologist psychologist) {
        if (this.login(psychologist.getUsername()).getStatusCode() == HttpStatus.NOT_FOUND) {
            psychologistService.save(psychologist);
            return new ResponseEntity<>("psychologist saved!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("already exists!", HttpStatus.CONFLICT);
        }
    }

}
