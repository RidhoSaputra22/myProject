import clipboard
import qrcode
from tkinter import *

# create auto paste content
text = clipboard.paste()  
print(text)

# create the QR code
img = qrcode.make(text)
type(img)  # qrcode.image.pil.PilImage
img.save("img.png")

# open the QR image file
ws = Tk()
ws.title('PythonGuides')
img = PhotoImage(file='img.png')
Label(
    ws,
    image=img
).pack()

ws.mainloop()