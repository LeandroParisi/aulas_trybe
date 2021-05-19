from account import Account, CheckingAccount, SavingsAccount

class Client:
  def __init__(self, name, tel, account_type):
    self.name = name
    self.tel = tel
    if issubclass(account_type, Account):
      self.account = account_type()
    else:
      raise ValueError('Não foi passado um tipo de conta')
    self.__savings = 0

  def get_savings(self):
    return self.__savings

  def receive(self, value):
    if value < 0:
      return
    self.__savings += value

  def pay(self, value):
    if value < 0 or value > self.__savings:
      raise ValueError('Saldo insuficiente')
    self.__savings -= value
    return self.__savings
      
def buy_icecream(client):
  try:
    client.pay(5)
  except ValueError:
    try:
      client.account.withdrawn(5)
      client.receive(5)
      client.pay(5)
    except ValueError:
      print('Não tem nem no bolso nem no banco malandro!!')

c = Client('Leandro', '987987987', SavingsAccount)
    

# self -> referencia à si mesmo
# self.__savings = 0 -> double under __ means private attribute