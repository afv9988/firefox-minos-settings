## About

These are the default settings for mozilla in [minos](http://minos.io).

<p align="center">
<img src="http://javier.io/assets/img/mozilla-minos-settings.png" alt="mozilla minos settings"/>
</p>

Some of the modifications are:

 - Default homepage: https://minos.io/find
 - Default theme: [nasa](https://addons.mozilla.org/en-us/firefox/addon/nasa-night-launch/?src=cb-dl-users)
 - Default plugins: adblock plus, chmfox, epubreader, firebug, ghostery,
   greasemonkey, lazarous, livehttp headers, noscript, pixlr grabber,
   text link, resurrect pages, tab counter, tabsearch, useragent agent,
   vimkeybindings, youtube mp3
 - Minimal layout

Other plugins/settings may be added in the future.

## Quick start

### On Ubuntu (only LTS versions)

1. Set up the minos archive:

   ```
   $ sudo add-apt-repository ppa:minos-archive/main
   ```

2. Install:

   ```
   $ sudo apt-get update && sudo apt-get install mozilla-minos-settings
   ```

3. Enjoy ☺!

### On other Linux distributions

1. Create a backup `mv ~/.mozilla ~/.mozilla.backup`

2. Put these files in place `mv mozilla ~/.mozilla`

3. Replace the muser with yours `find ~/.mozilla/ -type f | xargs sed -i -e "s/muser/$(whoami)/g"`
