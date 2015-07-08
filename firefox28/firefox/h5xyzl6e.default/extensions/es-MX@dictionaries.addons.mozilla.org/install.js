var err = initInstall("Diccionario español Mexico", "es-MX@dictionaries.addons.mozilla.org", "1.1.3");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "es-MX@dictionaries.addons.mozilla.org",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();
