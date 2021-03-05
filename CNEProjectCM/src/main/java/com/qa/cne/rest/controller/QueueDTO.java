package com.qa.cne.rest.controller;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class QueueDTO {
	
	private Long OrderID;
	private String FirstName;
	private String LastName;
	private String Email;
	private LocalDateTime QueueDate;
	private Integer QueuePosition;
}
