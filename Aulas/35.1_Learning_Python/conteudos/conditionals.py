from random import randint

pantheon = [
  { 'name': 'Wynna', 'domain': 'Magic'},
  { 'name': 'Nymb', 'domain': 'Luck' },
  { 'name': 'Baldur', 'domain': 'Earth' }
]

dice_roll = randint(1, 20)

if dice_roll == 1:
  print('Critical fail!')
elif 2 <= dice_roll < 15:
  print('Keep trying')
elif 15 <= dice_roll <= 19:
  print('Good!!')
else:
  print('Critical HIT!!')
