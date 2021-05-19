# arguments -> args
# key word arguments -> kwargs

# args
def func(arg1, arg2, *args):
  print(f'arg1: {arg1}')
  print(f'arg2: {arg2}')
  print(f'args: {args}')
  print(*args)

# kwargs
def kwargs(arg1, arg2, *args, **kwargs):
  print(f'arg1: {arg1}')
  print(f'arg2: {arg2}')
  print(f'args: {args}')
  print(*args)
  print(f'kargs: {kargs}')
  print(**kwargs)


# aplicação:
def imprime_contando(*args):
  count = 1
  for arg in args:
    print(f'arg é o arg na posição {count}')
    count += 1


# pq react começou com OPP?
# OPP no front?
