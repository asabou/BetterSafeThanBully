package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.Parent;
import com.alfa.BetterSafeThanBully.service.IParentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/parent")
public class ParentController {
    private final IParentService parentService;

    public ParentController(IParentService parentService) {
        this.parentService = parentService;
    }

    @GetMapping("/login/{username}")
    private ResponseEntity<?> login(@PathVariable("username") String username) {
        Optional<Parent> parentOptional = parentService.findByUsername(username);
        if (parentOptional.isPresent()) {
            return new ResponseEntity<>(parentOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("not found!", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/save")
    private ResponseEntity<?> saveParent(@RequestBody Parent parent) {
        if (!parentService.findByUsername(parent.getUsername()).isPresent()) {
            parentService.save(parent);
            return new ResponseEntity<>("psychologist saved!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("already exists!", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/all")
    private ResponseEntity<?> findAll() {
        return new ResponseEntity<>(parentService.findAll(), HttpStatus.OK);
    }
}
