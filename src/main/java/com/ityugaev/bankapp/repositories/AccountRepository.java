package com.ityugaev.bankapp.repositories;

import com.ityugaev.bankapp.models.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long> {
}
