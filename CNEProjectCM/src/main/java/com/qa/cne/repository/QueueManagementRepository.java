package com.qa.cne.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.qa.cne.persistance.domain.QueueManagement;


public interface QueueManagementRepository extends JpaRepository<QueueManagement, Long> {

	QueueManagement findOrderByOrderID(int OrderID);
	
	
}
