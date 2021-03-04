package com.qa.cne.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.cne.persistance.domain.QueueManagement;
import com.qa.cne.repository.QueueManagementRepository;
import com.qa.cne.rest.controller.QueueDTO;
import com.qa.cne.service.exceptions.OrderNotFoundException;


@Service
public class QueueManagementService {
	
	private QueueManagementRepository repo;
    private ModelMapper mapper;
	
	@Autowired
	public QueueManagementService(QueueManagementRepository repo) {
		super();
		this.repo = repo;
	}
	
	private QueueDTO mapToDto(QueueManagement Queue) {
		return this.mapper.map(Queue, QueueDTO.class);
	}
	//Methods
	
	//Create Queue Position
	public QueueDTO create(QueueManagement Queue) {
		QueueManagement created = this.repo.save(Queue);
		QueueDTO converted = this.mapToDto(created);
		return converted;
	}
	
	//Find Queue details
	public QueueDTO readById(Long OrderID) {
		QueueManagement OrderRetrieved = this.repo.findById(OrderID).orElseThrow(OrderNotFoundException::new);
		QueueDTO convertedOrder = this.mapToDto(OrderRetrieved);
		return convertedOrder;
	}
	
	//Remove from Queue by orderID
	public boolean deleteById(Long OrderID) {
		
	
		this.repo.deleteById(OrderID);
		
		return !this.repo.existsById(OrderID);
	}
}
