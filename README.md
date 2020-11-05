## Blog Website 📝📌
### Project By [Hitik Saini](https://hitik20.tech/)
A node.js coded website for your personal/community blog. This is just a prototype for a sample Blog Website you will need to re-design as per your choice.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/hitiksaini/Blog-Website/issues)

### Prerequisite
Install latest version of nodejs & mongoDB(database) into your PC for this to work. I have explained the installation process below refer to it and when you're done:

You now just need to open terminal and write these commands:

* ### `git clone https://github.com/hitiksaini/Blog-Website.git `
* navigate to where you downloaded the repository and install all the requirements- `npm install` 
* ### `node app.js` 
If all goes well and you configure all the required modules correctly, this will run the whole node.js coded project and you will see the blog website on your local servers(https://localhost:3000/)

# Installation Guide: Node.js | Express.js | MongoDB
## Node.js on Windows : [Download](https://nodejs.org/en/)
Installation Steps

* Download the Windows installer from the Nodes.js® website
* Choose the LTS version that’s shown on the left. 
* Run the installer (the .msi file you downloaded in the previous step.)
* Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
* Restart your computer. You won’t be able to run Node.js® until you restart your computer.
* Confirm that Node has been installed successfully on your computer by opening a Hyper terminal and typing in the commands 
### `node --version`

You should see the version of node you just installed.

## Node.js on Mac : [Download](https://nodejs.org/en/)
Installation Steps

* Download the Mac installer from the Nodes.js® website. 
* Choose the LTS version that’s shown on the left. 
* Run the installer (double-click on the .pkg file you downloaded in the previous step.)
* NOTE: If you are running macOS Catalina 10.15, you might get a warning pop up
* To solve this issue, just right click (hold down the control key on the keyboard and click) on the .pkg file and select "Open With" and then select "Installer (default)".
* Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
* Confirm that node has been installed successfully by opening a Hyper terminal and entering the command
### `node --version`

You should see the version of node you have just installed.

#### Express is a framework for Node.js it can be used by using npm package.
### `npm install express`

# MongoDB Installation 
## Download the msi file based on your platform(windows, mac, linux etc) [Download](https://www.mongodb.com/try/download/community)
## Install
* Select the latest version and click download.
* After downloding the file double click it, and install it in complete mode.
* Note the data directory I recommend you not to change and keep it default.
* Uncheck Install mongodb compass, we don't need it for now.
* Click Install now. 

## Configure
After successfully installing the latest version you need to configure the database to use it.

* Navigate to your C:// drive or /home in linux 
* Create a folder and name it "data" (make sure to name it exactly)
* Now make another folder inside this folder named "db" (make sure to name it exactly)
The path should now appear like this:
### C:\data\db
Now set alias to your database based on your database directory in your C drive.
* `cd ~ `
* `touch .bash_profile`
* now open this bash file and set alias (mongo = "just paste the directory")


Here is the official document which guide you step by step for installing mongoDB locally.
Refer to this: https://docs.mongodb.com/guides/server/install/

### You can always contact for any help😉
