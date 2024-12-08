package match;

import java.util.Random;

import competitor.Competitor;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;

public  abstract class Match{
	protected Competitor c1;
	protected Competitor c2;
	protected Competitor winner;
	protected Competitor looser;
	public Match(Competitor c1,Competitor c2) {
		this.c1=c1;
		this.c2=c2;
		this.winner=new Competitor(null);
		this.looser=new Competitor(null);
		
	} 

	/**
	 * it allows to organize a match between two players
	 */
	public abstract  void OrganizeMatch();
	/**
	 * 
	 * @return the game's winner
	 */
	public Competitor getWinner() {
		return this.winner;
	}
	/**
	 * 
	 * @return the game's looser
	 */
	public Competitor getLooser() {
		return this.looser;
	}

	/**
	 * 
	 * @return the first competitor 
	 */
	public Competitor getC1() {
		return c1;
	}

	/**
	 * 
	 * @return the second competitor
	 */
	public Competitor getC2() {
		return c2;
	}
	
	
}