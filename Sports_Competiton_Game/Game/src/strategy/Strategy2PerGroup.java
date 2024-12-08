package strategy;

public class Strategy2PerGroup extends Strategy {
	final static int nbrWinnerspergrp=2;
	
	int NbrPlayersDrafted;
	public Strategy2PerGroup() {
		super(nbrWinnerspergrp,0,0);
	}

}
