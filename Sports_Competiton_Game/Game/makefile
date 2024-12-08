
PACKAGE = competition/*.java competitor/*.java match/*.java strategy/*.java utils/*.java main/*.java  


all: cls doc maintournament mainleague mainmaster



doc: 
	cd src && javadoc competition competitor match strategy utils main   -d ../doc


cls:
	cd src && javac -d ../classes $(PACKAGE)
maintournament:
	cd classes && jar cvfm ../jar/maintournament.jar ../MANIFEST/manifest-maintournament.MF * 
mainleague:
	cd classes && jar cvfm ../jar/mainleague.jar ../MANIFEST/manifest-mainleague.MF *
mainmaster:
	cd classes && jar cvfm ../jar/mainmaster.jar ../MANIFEST/manifest-mainmaster.MF *

clean:
	rm -r classes docs
	
.PHONY: all clean doc cls



