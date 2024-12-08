package match.matchobserver;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

import competitor.Competitor;
import match.Match;

public class MatchReminder {
	public MatchReminder() {
	}
	private ArrayList<MatchObserver> matchObservers = new ArrayList<MatchObserver>();
	/**
	 * add an observer(Journalist or bookmaker) to the observers list
	 * @param observer a journalist or a bookmaker
	 */
	public void register(MatchObserver observer) {
		matchObservers.add(observer);		  
	}
	/**
	 * 
	 * @return the current list of observers
	 */
	public ArrayList<MatchObserver> getMatchObservers() {
		return matchObservers;
	}
	/**
	 * remove a journalist or a bookmaker from the observers list
	 * @param observer a journalist or a bookmaker
	 */

	public void unRegister(MatchObserver observer) {
		matchObservers.remove(observer);		
	}
	/**
	 * notify Observers about a match
	 * @param m a Match
	 */
	public void MatchRemind(Match m) {
		for (MatchObserver matchObserver : matchObservers) {
			matchObserver.ObserverReact(m);
		}
	}
}
