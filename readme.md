# Restoring webOS On-Device Help

<img src="http://www.webosarchive.org/help.png">
This is an archived effort to make the built-in Help app on webOS devices work again.

## Project Status

At this time the *Touchpad* has most of the Help restored in *English*, *French*, *German* and *Italian*. 

The *Veer* (running 2.2.4) and *Pre3 have* been tested in *English*, which has been mostly restored for those devices as well.

## Usage

To try it out, you need to show your device where to find the new server:

The easiest way to repair your online experience is to use the webOS Archive Proxy server:

- <a href="http://www.webosarchive.com/docs/proxysetup/">http://www.webosarchive.com/docs/proxysetup/</a>

If you'd rather not use a public proxy, you can hosts the help files on your own server, and add a hosts (`/etc/hosts`) entry on your device like this:

- `<ipaddress>   help.palm.com`

Where `<ipaddress>` is the address of your web server. Do not host the content over HTTPS -- only HTTP will work.

## Contents

You can download the content, or contribute to its restoration at <a href="https://www.github.com/webosarchive/palm.help.com">https://www.github.com/webosarchive/palm.help.com</a>
