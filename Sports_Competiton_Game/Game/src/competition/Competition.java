package competition;

import match.*;
import match.matchobserver.BookMaker;
import match.matchobserver.Journalist;
import match.matchobserver.MatchObserver;
import match.matchobserver.MatchReminder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import utils.MapUtil;

import competitor.Competitor;

public abstract class Competition {
	protected Match match;
	final List<Competitor> competitors;
	protected HashMap<Competitor, Integer> comp_rank;
	protected HashMap<Competitor, Integer> sports_betting;
	protected Journalist journalist;
	protected BookMaker bookmaker;
	protected MatchReminder mR;
	protected ArrayList<MatchObserver> observers;
	public Competition(List<Competitor> competitors,ArrayList<MatchObserver> observers) {
		this.competitors = competitors;
		this.comp_rank = new HashMap<Competitor, Integer>();
		for (Competitor competitor : competitors) {
			comp_rank.put(competitor, 0);
		} 
		this.observers=observers;
		this.mR=new MatchReminder();
		this.addListeners(); 
		
	}
	/**
	 * allows us to simulate the course of a competition 
	 * @throws CompetitorsNumberNotPowerOfTwoException 
	 */ 
	public void play() {
		this.play(competitors);
	}
	/**
	 * allows us to simulate the course of a competition 
	 * @param competitors competitors participating in the competition
	 * @throws CompetitorsNumberNotPowerOfTwoException 
	 */
	protected abstract void play(List<Competitor> competitors);
	/**
	 * allows to allows us to simulate the course of a match between two competitors
	 * @param c1 the first competitor
	 * @param c2 the second competitor
	 */
	protected  void playMatch(Competitor c1, Competitor c2) {
		 
		Match match=new RandomMatch(c1,c2); 
		match.OrganizeMatch();
		Competitor winner=match.getWinner();
		this.getmR().MatchRemind(match);
		System.out.println(c1.getPlayer_Name()+" vs "+c2.getPlayer_Name()+" --> "+winner.getPlayer_Name()+" wins!" );
		this.setComp_rank(comp_rank,winner);
	}
	/**
	 *	it returns us the ranking of competitors in a disordely manner
	 * @return the the ranking of competitors in a disordely manner
	 */
	
	public HashMap<Competitor, Integer> getComp_rank() {
		return comp_rank;
	}
	 

	/**
	 * 
	 * @param comp_rank to set the points number of a competitor in a competition
	 * @param c a competitor 
	 */

	public void setComp_rank(HashMap<Competitor, Integer> comp_rank,Competitor c) {
		this.comp_rank.put(c,c.getNb_Points());
	}
	
	/**
	 * 
	 * @return the match played between competitors
	 */
	public Match getMatch() {
		return this.match;
	}
	/**
	 * update the match type of a competition
	 * @param match match type
	 */
	public void setMatch(Match match) {
		this.match = match;
	}
/**
 * 
 * @return the final ranking in a competition
 */
	public Map<Competitor, Integer> ranking() {
		
		return MapUtil.sortByDescendingValue(comp_rank);

	}
	/**
	 * 
	 * @return the list of the competitors who will participate in the competition
	 */
	public List<Competitor> getCompetitors() {
		return this.competitors;
	}
	/**
	 * 
	 * @param x a number's value
	 * @return True if a number is power of two,false else
	 */
	public boolean IsPowerOfTwo(int x) {
		return (x!=0) && ((x&(x-1))==0);
}
	/**
	 * 
	 * @return the competiton's winner
	 */
	public Competitor comp_winner() {
		Competitor winner=null;
		Set<Competitor> res = this.ranking().keySet();
		Iterator<Competitor> it = res.iterator() ;
		if(it.hasNext()) {
			winner=it.next();
		}
		return winner;
	}
	/**
	 * it allows to add the listeners(journalists and bookmakers) into the matchobservers list
	 */
	public void addListeners() {
		for (MatchObserver mo: this.getObservers()) {
			this.mR.register(mo);
		}
		
	}
	/**
	 * 
	 * @return a MatchReminder which  notify the listeners(journalists and bookmakers)about the matches
	 */
	public MatchReminder getmR() {
		return mR;
	}
	/**
	 * 
	 * @param mR a MatchReminder
	 * 
	 */
	public void setmR(MatchReminder mR) {
		this.mR = mR;
	/**
	 * modify a replace the actual MatchReminder with another one
	 */
	}
	/**
	 * 
	 * @return the MatchObservers list (Journalists and bookmakers) 
	 */
	public ArrayList<MatchObserver> getObservers() {
		return observers;
	}
	/**
	 * 
	 * @param observers the current observers(Journalist and bookmakers) list
	 */
	public void setObservers(ArrayList<MatchObserver> observers) {
		this.observers = observers;
		this.addListeners();
	}

	
	

	
	

}