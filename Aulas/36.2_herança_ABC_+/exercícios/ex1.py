class Television:
    def __init__(self, size):
        self._volume = 50
        self._channel = 1
        self._size = size
        self._on = False

    def raise_volume(self):
        if 0 < self._volume < 90:
            self._volume += 1

    def lower_volume(self):
        if self._volume > 0:
            self._volume -= 1

    def change_channel(self, new_channel):
        if 1 <= new_channel <= 99:
            self._channel = new_channel
        else:
            raise ValueError("Não temos esse canal")

    def on_off(self):
        self._on = not self._on


my_tv = Television("9'")

print("Initial")
print(my_tv._volume)
print(my_tv._channel)
print(my_tv._size)
print(my_tv._on)

print("Function Calls")
my_tv.raise_volume()
my_tv.lower_volume()
my_tv.change_channel(20)
my_tv.on_off()

print("After function calls")
print(my_tv._volume)
print(my_tv._channel)
print(my_tv._size)
print(my_tv._on)

for number in range(1, 150):
    my_tv.raise_volume()
print(my_tv._volume)

for number in range(1, 150):
    my_tv.change_channel(number)
