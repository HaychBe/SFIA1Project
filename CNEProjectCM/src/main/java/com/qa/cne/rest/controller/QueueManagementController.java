package com.qa.cne.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cne.persistance.domain.QueueManagement;
import com.qa.cne.service.QueueManagementService;

@RestController
@RequestMapping("/QueueManagement")

public class QueueManagementController {

	private QueueManagementService service;
	
	@Autowired
	public QueueManagementController(QueueManagementService service) {
		super();
		this.service = service;
	}
	
	@PostMapping("/create")
	public ResponseEntity<QueueDTO> create(@RequestBody QueueManagement queueM){
		QueueDTO createdQueue = this.service.create(queueM);
		return new ResponseEntity<>(createdQueue, HttpStatus.CREATED);
	}
	@GetMapping("/read/{OrderID}")
	public ResponseEntity<QueueDTO> readById(@PathVariable Long OrderID){
		QueueDTO returned = this.service.readById(OrderID);
		return ResponseEntity.ok(returned);
	
	}
	@PutMapping("/update/{OrderID}")
	public ResponseEntity<QueueDTO> deleteById(@PathVariable Long OrderID){
		if (this.service.deleteById(OrderID)) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
