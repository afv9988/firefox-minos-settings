var err = initInstall("Português do Brasil", "pt_BR@dellalibera.sf.net", "2.1");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "pt_BR@dellalibera.sf.net",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();
