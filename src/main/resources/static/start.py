import subprocess
import webbrowser
subprocess.Popen(['python', '-m','http.server','8000'])
chrome = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
webbrowser.get(chrome).open('http://localhost:8000')