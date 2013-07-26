<a name="darwin-bot" class="anchor" href="#darwin-bot"><span class="octicon octicon-link"></span></a>
"Darwin Bot"
==========

Darwin Bot is a very simplified version of a bot for turntable.fm that runs on node.js.

This is a customizable Turntable.fm bot written in node.js utilizing <a href="https://github.com/alaingilbert/Turntable-API">ttapi</a>.

A few of you have asked me how you can make your own bot. Some of the bots for TT utilize a lot of dependencies which make them useful but complicated to figure out if you don't code. Here is a very basic version of the functions DarwinThe:Cat: can do.

This should hopefully all be fairly clear, even if you've never coded before. If you have any questions feel free to ask me.

Step 1: Download the TT api and node.js
========================================
Go to <a href="http://www.nodejs.org/">node.js</a> to download the library to your computer. They'll tell you how to install it.


Open up a Terminal window. In OS X, open Terminal.app. In Windows, go to Start -> Run and type <code>cmd</code>. In Linux, you know what to do. Then type this:
<code>npm install ttapi</code>

Step 2: Create an account for your bot and then get its info.
=============================================================
Once you've made your alt account, log in to the room where you want your bot to work. Alternatively, you can just log into a room where you want to test it and then switch the room data anyway. To get the data, use this <a href="http://alaingilbert.github.io/Turntable-API/bookmarklet.html">bookmarklet</a> to get the <code>auth</code>, <code>userid</code>, and <code>roomid</code> values for the script.

Step 3: Download Darwin Bot
============================
Download the darwinbot.js file. Open it in a text editor and have fun. I've included explanations for the commands inline with the code.

Any questions, you know where to find me :)
