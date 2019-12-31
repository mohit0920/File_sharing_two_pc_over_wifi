# File_sharing_two_pc_over_wifi
Can be used to share files between two or multiple pc connected over single wifi or mobile hotspot with a speed of 3-4MBps.
<ul>

<li>You need to clone the repo</li>
<li>Set up or install node js and npm install npm packages required</li>
<li><ol>
        <li>``` $ npm install express ejs body-parser```</li>
</ol></li>
<li>Now extract the public ip of source machine it can be done with the help of ifconfig on ubuntu or linux machines and ipconfig on windows source.</li>
<li>Make sure you select the correct Ip if you are using mobile hotspot turn off you mobile data.</li>
<li>You can even use it with mobile data turned on. but you need to selct correct IP it generallly starts with 192...</li>
<li>Needs to run node server on host machine machine where you want to send files means at source end. And all firewalls should be disable or the port 80/tcp or 45678/tcp must allowed.</li>
<li>Go to the cloned repository and put the files you want to share in the repository folder.</li>
<li>``` $ node app.js```</li>
<li>On the destination machine or the receiver end Go to http://<IPv4 address of source machine>:45678/file_name_you_want_transfer. and Download the file.</li>
</ul>
Here You go. You can add files to that folder and can download it after that.