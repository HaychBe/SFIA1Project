package com.qa.cne.persistance.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QueueManagement {

	@Id  //Primary Key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int OrderID;
	
	@Column
	private String FirstName;
	
	@Column
	private String LastName;
	
	@Column
	private String Email;
	
	@Column
	private LocalDateTime QueueDate;
	
	@Column
	private int QueuePosition;
	 
}
