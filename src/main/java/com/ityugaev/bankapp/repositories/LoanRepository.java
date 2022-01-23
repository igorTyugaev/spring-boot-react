package com.ityugaev.bankapp.repositories;

import com.ityugaev.bankapp.models.Loan;
import org.springframework.data.repository.CrudRepository;

public interface LoanRepository extends CrudRepository<Loan, Long> {
}
