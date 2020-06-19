package io.github.fabiodamas.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.fabiodamas.api.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}