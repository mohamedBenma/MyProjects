package match.matchobserver;

import competitor.Competitor;
import match.Match;

public interface MatchObserver extends java.util.EventListener {
	/**
	 * observers will react to a match
	 * @param match a match 
	 */
	public void ObserverReact (Match match);

}
