import sys
import time
from selenium import webdriver
import subprocess
import webbrowser
import os

def setProperties(environment):
    command = "copy C:\\Users\\alexandru.sabou\\Desktop\\BetterSafeThanBully\\src\\main\\resources\\application-"+environment+".properties C:\\Users\\alexandru.sabou\\Desktop\\BetterSafeThanBully\\src\\main\\resources\\application.properties"
    os.system(command)

def startLocalServer():
    os.chdir("C:\\Users\\alexandru.sabou\\Desktop\\BetterSafeThanBully")
    os.system("gradlew bootRun")

def startLocalClient():
    os.chdir("C:\\Users\\alexandru.sabou\\Desktop\\BetterSafeThanBully\\src\\main\\resources\\static")
    subprocess.Popen(["python","-m","http.server","8000"])
    chrome = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
    webbrowser.get(chrome).open('http://localhost:8000')

def runLocal():
    setProperties("dev")
    startLocalClient()
    startLocalServer()

def deployToGithub():
    os.chdir("C:\\Users\\alexandru.sabou\\Desktop\\BetterSafeThanBully")
    os.system("git add .")
    os.system('git commit -m "new commit"')
    os.system('git push origin master')

def startCloudClient():
    chrome = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s'
    webbrowser.get(chrome).open('https://better-safe-than-bully.herokuapp.com/')

def runOnCloud():
    setProperties("prod")
    deployToGithub()
    time.sleep(45)
    startCloudClient()

def main():
     arguments = sys.argv
     if (len(arguments) == 2):
        if (arguments[1] == "dev"):
            print("Running on localhost .............")
            runLocal()
        elif (arguments[1] == "prod"):
            print("Running on cloud ..............")
            runOnCloud()
        else:
             print("Invalid argument!!!!")
     else:
        print("Give an argument! { prod/dev }")

main()
