# change
import keyboard
import time
from os import system, name

def clear():
    if name == 'nt':
        _=system('cls')
    else:
        _=system('clear')

def animation(move):
    n = 0
    for i in range(1000):
        n += 1
        if i == move:
            print("[=]",end="")
        if n == 100:
            print("")
            n = 0
        print("*", end="")
       
move = 0
c = 1
check = True
while check :
    
    # Right
    if keyboard.is_pressed("a"):
        move -= 1
        clear()
        animation(move)
    # Left
    if keyboard.is_pressed("d"):
        move += 1
        clear()
        animation(move)
     # UP
    if keyboard.is_pressed("w"):
        move -= 100
        clear()
        animation(move)
    # Down
    if keyboard.is_pressed("s"):
        move += 100
        clear()
        animation(move)
        
    
    print(move, end="\r")
      

