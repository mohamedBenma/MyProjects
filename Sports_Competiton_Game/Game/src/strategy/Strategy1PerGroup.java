package strategy;

public class Strategy1PerGroup extends Strategy {
	final static int nbrWinnerspergrp=1;
	public Strategy1PerGroup() {
		super(nbrWinnerspergrp,0,0);
	}
}
