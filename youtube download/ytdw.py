
from pytube import YouTube

def on_complete(stream, filepath):
    print('complete')
    # print(filepath)

def on_progress(stream, chunk, byte_remaining):
    # print(byte_remaining)
    print('Downloading...') 

# MAIN
link = input('link: ')
yt = YouTube(
    link, 
    on_complete_callback= on_complete,
    on_progress_callback= on_progress)
dw = yt.streams

# information
print(f'title : {yt.title}')
print(f'author : {yt._author}')
print('Download Quality : (h)Highest    (l)Lowest   (a)Audio Only')
download_choice = input('pilih: ')

# Download
match download_choice:
    case 'h': 
        dw.get_highest_resolution().download("G:\VIDEO\VIDEO BARU")
    case 'l':
        dw.get_lowest_resolution().download("G:\VIDEO\VIDEO BARU")
    case 'a':
        dw.get_audio_only().download("G:\MUSIC\BARU")




# stream.get_audio_only().download()
