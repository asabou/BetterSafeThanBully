package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.Child;
import com.alfa.BetterSafeThanBully.service.IChildService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/child")
public class ChildController {

    private final IChildService childService;

    public ChildController(IChildService childService) {
        this.childService = childService;
    }

    @GetMapping("/login/{username}")
    private ResponseEntity<?> login(@PathVariable("username") String username) {
        Optional<Child> childOptional = childService.findByUsername(username);
        if (childOptional.isPresent()) {
            return new ResponseEntity<>(childOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("not found!", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/save")
    private ResponseEntity<?> saveChild(@RequestBody Child child) {
        if (this.login(child.getUsername()).getStatusCode() == HttpStatus.NOT_FOUND) {
            childService.save(child);
            return new ResponseEntity<>("child saved!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("already exists!", HttpStatus.CONFLICT);
        }
    }
}
