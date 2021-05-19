from abc import ABC

class Account(ABC):
  def __init__(self):
    self._balance = 0

  def get_balance(self):
    return self._balance

  def deposity(self, value):
    if value < 0:
      return
    self._balance += value

  def withdrawn(self, value):
    if value < 0:
      return
    self._balance -= value
    return self._balance


class CheckingAccount(Account):
  LIMIT = -200

  def __init__(self):
    super().__init__()

  def withdrawn(self, value):
    if self._balance - value < self.LIMIT:
      raise ValueError(f"Negativado!! Limite mínimo {self.LIMIT}")
    self._balance -= value

class SavingsAccount(Account):
  RATE = 1.05

  def __init__(self):
    super().__init__()

  def income(self):
    self._balance *= self.RATE


  
ca = CheckingAccount()

sa = SavingsAccount()
# self._savings = 0 -> protected __ private for anyone, except children classes